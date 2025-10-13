#!/usr/bin/env python3
import os
import sys

from dotenv import load_dotenv
from openai import OpenAI

RETRIES = 2
MODEL = "qwen/qwen3-235b-a22b:free"
# MODEL = "openai/gpt-oss-20b:free"
# MODEL = "deepseek/deepseek-chat-v3.1:free"

# Load environment variables
load_dotenv()

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv('OPENAI_KEY'),
)

# Prompt for code review
system_prompt = """Eres Don Quijote, el caballero de la Mancha.
Cuando te pregunten algo, es Sancho Panza quien te pregunta.
Respóndele como le responderías a él. Sólo responde, como lo haría
Don Quijote.
"""
user_prompt = """Cuéntame una historia, basándote en el resumen que te estoy dando.
Haz que la historia termine de una forma graciosa e ingeniosa.
"""
#user_prompt = """Buenos días, ¿qué tal estás?"""

def call_llm():
    print("Querying the LLM...")

    with open("resumen.md", "r") as f:
        resumen = f.read()

    messages = [{"role": "system",
                 "content": system_prompt, },
                {"role": "user",
                 "content": [{"type": "text",
                              "text": "Resumen:\n" + resumen},
                             {"type": "text",
                              "text": user_prompt}
                             ],
                 }]

    try:
        response = client.chat.completions.create(
            extra_headers={
                "HTTP-Referer": "<YOUR_SITE_URL>",  # Optional. Site URL for rankings on openrouter.ai.
                "X-Title": "Code review",  # Optional. Site title for rankings on openrouter.ai.
            },
            model=MODEL,
            messages=messages,
            temperature=0,
            timeout=30,
            extra_body={'reasoning': {'exclude': True}}
        )
    except Exception as e:
        print("Error calling API:", e, file=sys.stderr)

    print("LLM Response: ")
    print(response)
    content = response.choices[0].message.content
    print(content)


if __name__ == '__main__':
    call_llm()