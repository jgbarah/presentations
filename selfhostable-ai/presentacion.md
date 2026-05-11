---
marp: false
theme: uncover
paginate: true
---

# Modelos de IA generativa en tu propia infraestructura

### IA: Actividades para todas las edades y materias

Madrid, España, 11 de mayo de 2026

Jesus M. Gonzalez-Barahona

<small>https://jgbarah.github.io/presentations/</small>

---

Traducido del original en inglés,

usando el modelo

`nvidia/nemotron-3-nano-30b-a3b`

---
## ¿Qué contiene un modelo generativo

- Arquitectura
- Pesos, solo pesos 
- Software para inferir
  
Pero también:

- Datos para entrenar, comparar
- Software para entrenar, comparar
- Pesos de modelos intermedios
- Documentación, explicando todo

---
## Un amplio espectro

* Modelo detrás de la aplicación
* Modelo directamente accesible
* Modelo con pesos disponibles
* Modelo de peso abierto
* Modelo de código abierto
* Modelo reproducible (libre)

---

![Model kinds](figs/model_kinds.png)

---
## Clases de «apertura»

- Modelo abierto: arquitectura, parámetros del modelo, pesos y metadatos, informe técnico, tarjeta del modelo, tarjeta de datos

- Herramientas abiertas: modelo abierto más código de entrenamiento, inferencia y evaluación, bibliotecas, datos de evaluación

- Ciencia abierta: herramientas abiertas más artículo, conjuntos de datos, archivos de registro, parámetros de modelos intermedios, pesos y metadatos

---
## Para cada uno de ellos...

- Libertad de uso
- Libertad de estudio
- Libertad de modificación
- Libertad de distribución

Las «cuatro libertades» de ["¿Qué es el Software Libre?"](https://www.gnu.org/philosophy/free-sw.html)

---
## Algunos aspectos específicos

* Acceso: ¿puedes ejecutar inferencias de la manera que quieras?

* Control sobre el modelo: ¿puedes modificar la forma en que el modelo funciona? (por ejemplo, fine‑tunar)

* Control sobre tus datos: ¿puedes controlar el prompt, los resultados?

* Autonomía: ¿cuánta dependencia tienes del proveedor del modelo?

* Confianza: ¿puedes asegurarte de que el modelo funciona como se espera? (por ejemplo, backdoors, etc.)

---
## ¿Por qué esto importa?

* Acceso al modelo: casos de uso, innovación, integración

* Control del modelo: casos de uso, innovación, integración

* Control de los datos: privacidad, independencia, dependencia

* Autonomía: competencia en el mercado, independencia, dependencia

* Confianza: seguridad, transparencia.

---
## Modelo detrás de la aplicación

* Una aplicación utiliza uno o varios modelos para proporcionar algún servicio

* Puede ser una aplicación local o en la nube

* La aplicación puede ser generalista o muy específica

* El modelo puede cambiar con el tiempo

---

![h:500 Google NotebookLM](figs/notebooklm.png)

* Google NotebookLM

---

![h:500 DeepL](figs/deepl.png)

* DeepL

---

![h:500 DeepL](figs/windsurf.png)

* Windsurf en Visual Studio Code

---

* HuggingFace Spaces

![bg right:50% h:500 HuggingFace Spaces](figs/huggingface_spaces.png) 

---
## Modelo directamente accesible

* Acceso usualmente a través de una API HTTP

* La API define hasta qué punto el modelo puede ser controlado

* Bibliotecas y kits de desarrollo (SDKs) pueden estar disponibles

* Diseñados para crear aplicaciones, dependiendo de la API

* El modelo puede cambiar con el tiempo

---

![h:500 OpenRouter](figs/openrouter.png)

* OpenRouter

---

![h:500 Groq](figs/groq.png)

* Groq

---
## Modelo con pesos disponibles

* Los pesos están disponibles

* Normalmente, el software para inferencias está disponible / OSS

* Puede ejecutarse en infraestructura de confianza

* Fine‑tuning, etc. suele ser posible

* La redistribución, modificación y uso pueden estar sujetos a condiciones o estar prohibidos

En algunos casos, se le llama «modelos de pesos abiertos»

---
## Ejemplos de modelos con pesos disponibles

* [Kimi K2](https://github.com/MoonshotAI/Kimi-K2)
    * Licencia MIT modificada

* [LLaMa3 models](https://www.llama.com/models/llama-3/) (abril 2025)

    * Licencia Comunitaria de Meta
    * [La licencia de LLaMa de Meta sigue sin ser Open Source](https://opensource.org/blog/metas-llama-license-is-still-not-open-source)

---
## Ejemplos de modelos con pesos disponibles

* [Gema3](https://deepmind.google/models/gemma/)
    * Términos de Uso de Gemma

* [Mistral Small 4](https://mistral.ai/news/mistral-small-4) (marzo 2026)
    * Licencia Apache 2.0

---
## Ejemplos de modelos con pesos disponibles

* [Tülu3](https://allenai.org/tulu)
    * Licencia Comunitaria de LLaMa
    * Fine‑tuned a partir de LLaMa3.1
    * Todos los detalles y datos del fine‑tune están disponibles

* [Cohere Command A](https://huggingface.co/spaces/CohereLabs/c4ai-command) (agosto 2025)
    * Creative Commons Attribution‑NonCommercial 4.0 International y Términos de Uso de Cohere

---
## Modelo de peso abierto

* Permite usar, redistribuir y crear obras derivadas
* No se imponen condiciones de uso
* Obras derivadas: fine‑tuning, integración, etc.

* No requiere información sobre el modelo, su entrenamiento, etc. (no hay libertad de estudio)

[Definición de Open Weight](https://openweight.org/)

[Open-Weight AI Models: What They Are, and Why OpenAI’s Next Move Matters](https://medium.com/@CodeWithYog/f86fe481973a)

---
## Ejemplo de modelo de peso abierto

* [Granite Code](https://huggingface.co/collections/ibm-granite/granite-code-models-6624c5cec322e4c148c8b330) (noviembre 2024)
    * Licencia Apache 2.0
    * Pocos datos sobre el modelo, su entrenamiento, etc.

---
## Modelo de código abierto

* Permite usar, redistribuir y crear obras derivadas

* No se imponen condiciones de uso

* Obras derivadas: fine‑tuning, integración, etc.

* Software de código abierto para entrenamiento, inferencia

* Descripción detallada del entrenamiento, sin necesidad de disponer del dataset de entrenamiento[Definición de Open Source AI](https://opensource.org/ai/open-source-ai-definition)

[¿Qué son los Open Weights?](https://opensource.org/ai/open-weights)

[Propuesta — Interpretación de DFSG en Artificial Intelligence (AI) Models](https://lists.debian.org/debian-vote/2025/04/msg00101.html)


---
## Ejemplos de modelos de código abierto

* [DeepSeek](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) (septiembre 2025)
    * Licencia MIT

* [GPT‑OSS](https://openai.com/open-models/) (agosto 2025)
    * Licencia Apache 2.0

* [Qwen3.5](https://huggingface.co/collections/Qwen) (febrero 2026)
    * Licencia Apache 2.0

---
## Modelo reproducible (libre)

* Permite usar, redistribuir y crear obras derivadas

* No se imponen condiciones de uso

* Obras derivadas: fine‑tuning, integración, etc.

* Toda la información del modelo

* Requiere la disponibilidad del dataset de entrenamiento

---
## Ejemplos de modelos reproducibles (libres)

* [Olmo3](https://allenai.org/olmo), [informe técnico](https://arxiv.org/abs/2512.13961) (diciembre 2025)
    * Licencia Apache 2.0

* [MAP‑Neo](https://map-neo.github.io/) (abril 2025)
    * Licencia Apache 2.0

---
## Ejemplos de modelos reproducibles (libres)

* [LLM360 K2](https://huggingface.co/collections/LLM360/k2-6622ae6911e3eb6219690039), [informe técnico](https://www.llm360.ai/reports/K2_tech_report.pdf) (julio 2024)
    * [Otros modelos LLM360](https://www.llm360.ai/index.html#models)

* [Apertus](https://www.swiss-ai.org/apertus) (septiembre 2025)
    * Licencia Apache 2.0

* [Alia](https://alia.gob.es/) (2026-02)
    * Apache 2.0 License

---

![Model kinds](figs/model_kinds.png)

---
<style scoped>section{font-size:20px;}</style>

|  | Acceso | Control del modelo | Control de datos | Autonomía | Confianza |
| --- | --- | --- | --- | --- | --- |
| Modelo detrás de la aplicación | Definido por la app | Ninguno | Ninguno | Ninguno | Ninguno |
| Modelo directamente accesible | Restricciones de la API | Restricciones de la API | Ninguno | Ninguno | Ninguno |
| Modelo con pesos disponibles | Con condiciones | Con condiciones | Completo | Con condiciones | Ninguno |
| Peso abierto | Usar como quieras | Control profundo | Completo | Estudio restringido | Ninguno |
| Código abierto | Usar como quieras | Control profundo | Completo | Estudio detallado restringido | Parcial |
| Reproducible | Usar como quieras | Control profundo | Completo | Completo | Completo |

---
## Problemas abiertos

* Relación compleja entre datos, recetas, arquitectura, pesos, software...
    * Falta de definiciones exactas para varias categorías
    * Difícil determinar en qué categoría se encuentra un modelo
* Adaptaciones de definiciones para fine‑tunes y evoluciones de modelos?
* ¿Cómo asegurar que los anuncios sean verdaderos?

---
# Modelos auto‑alojables

---
## Mínimo para ejecutar en tu infraestructura

- Código de inferencia, con bibliotecas
- Parámetros y metadatos del modelo (pesos)
- Informe técnico (prompts, etc.)
- Tarjeta del modelo (conveniente)

Al menos, «modelo con pesos disponibles» si el código de inferencia está disponible

**Modelos auto‑alojables**

---
## Modelos auto‑alojables

* Si el software de apoyo está disponible
    * Modelos con pesos disponibles
    * Modelos de peso abierto
* Modelos de código abierto
* Modelos reproducibles

---

![Model kinds](figs/model_kinds.png)

---

![h:500 HuggingFace Models](figs/huggingface_models.png)

* [HuggingFace Models](https://huggingface.co/models)

---
## Ventajas de los modelos auto‑alojables

* Disponibilidad futura garantizada
* Ejecutarlos en tu propia infraestructura
* Integrarlos fácilmente
* Competencia en el mercado de acceso mediante API
* Tú decides si ejecutarlos en la nube o en el borde

---
## Desventajas de los modelos auto‑alojables

* Los modelos disponibles suelen ser menos avanzados que el estado del arte
    * (posiblemente un retraso de 6‑12 meses)
* La mejora y el soporte no siempre ocurren

---
## Ventajas de auto‑alojar

* Control total de todo
* Para muchos tipos de tareas, basta con lo disponible
* Más fácil para reproducibilidad

---
## Desventajas de auto‑alojar

* Inversión en infraestructura
* Limitaciones del hardware disponible
* El mantenimiento recae en ti
* Mantenerse al día puede ser un dolor
    * Decisiones sobre el mejor modelo
    * Decisiones sobre el mejor software
    * Decisiones sobre el mejor hardware

¡Se requieren habilidades técnicas!

---
## Requisitos de equipamiento

- Dependen de la arquitectura y el tamaño del modelo
- La CPU puede ser suficiente, la GPU acelera mucho
    - Opciones en la nube para GPUs
- Memoria RAM suficiente para que el modelo quepa
- El código suele ser OSS

También puedes desplegar en un host basado en la nube

---
## Aspectos económicos

* Requisitos de hardware
    * Período de retorno de inversión
* Tamaño y características de la carga de trabajo
* Fuentes de complejidad:
    * Múltiples usuarios, múltiples modelos, etc.
* Costos de mantenimiento
* Consumo de energía

Tienes que hacer los cálculos

---
## Ejecución local vía API

* Muchos proveedores diferentes con APIs similares
    * La mayoría usan la API de OpenAI
    * Muchos ofrecen varios modelos
    * Ejemplos: OpenRouter, Groq
* Frameworks proporcionan back‑ends para varios proveedores
    * Ejemplos: LiteLLM, LangChain
* Fácil probar varios modelos
* Dependiendo de la carga, puede ser más barato

---
## Cuantización

* Utilizada para reducir los requisitos de hardware
* De float32 a fp16, a int8, o menos
* Normalmente, post‑entrenamiento
* Varios formatos:
    * GPTQ, suele usar archivos `safetensors`
    * GGUF, popular en el ecosistema llama.cpp

[Guía de HuggingFace sobre Cuantización](https://huggingface.co/docs/optimum/en/concept_guides/quantization)

[GGUF: Estructura y Uso](https://apxml.com/courses/practical-llm-quantization/chapter-5-quantization-formats-tooling/gguf-format)

---
## Fine‑tuning

* Adaptar un modelo a una tarea específica con un dataset (usualmente más pequeño) especializado

* Punto de partida: pesos de un modelo dado

* Ajustar los pesos para que se ajusten al dataset especializado

* Adapter: nuevas capas de pesos añadidas a un modelo para fine‑tuning

[¿Qué es fine‑tuning?](https://www.ibm.com/think/topics/fine-tuning)

---
## HuggingFace: Cuantizaciones y fine‑tunes

![h:500 HuggingFace Adaptions](figs/huggingface_model_tree.png)

---
## Civit.AI: Imágenes y videos

* Fine‑tuning
* Cuantización
* Imágenes y videos

https://civitai.com/

---
## Motores de inferencia

* [llama.cpp](https://github.com/ggerganov/llama.cpp)
    * Proporciona una UI basada en web y una API HTTP* [vLLM](https://github.com/vllm-project/vllm)
    * Proporciona API HTTP

---
## Frameworks para LLMs

* [LangChain](https://github.com/langchain-ai/langchain): encadenar operaciones de grandes modelos de lenguaje en flujos de trabajo sofisticados, generalmente para crear herramientas de agente

* [LiteLLM](https://github.com/BerriAI/litellm): conjunto ágil diseñado para eficiencia y simplicidad

Ambos pueden usar modelos locales, o modelos a través de API HTTP

---
## Frentes de chat / asistente

* [Ollama](https://ollama.com/), basado en llama.cpp

* [Oobabooga WebUI](https://github.com/oobabooga/text-generation-webui)

* [Open WebUI](https://github.com/open-webui/open-webui): «casi» OSS

* [LibreChat](https://www.librechat.ai/): [online](https://librechat-librechat.hf.space/), [código fuente](https://github.com/danny-avila/LibreChat)

* [Jan](https://github.com/menloresearch/jan): asistente local

La mayoría de ellos también ofrecen una API HTTP

---
## Ollama: cómo ejecutarlo

```
curl -fsSL https://ollama.com/install.sh | sh
ollama serve
```

```
ollama run gemma3:1b
```

```
curl http://localhost:11434/api/generate -d '{
"model": "gemma3:1b",
"prompt":"Why is the sky blue?"
}'
```

[Usar Ollama para hospedar un LLM en equipos solo con CPU para habilitar un chatbot y API local](https://blog.gordonbuchan.com/blog/index.php/2025/01/11/using-ollama-to-host-an-llm-on-cpu-only-equipment-to-enable-a-local-chatbot-and-llm-api-server/)

---
## Open WebUI: cómo ejecutarlo

```
uv venv --python 3.11
uv pip install open-webui
uv run open-webui serve
```

Abre http://localhost:8080

---

![h:500 Open WebUI](figs/open-webui.png)

---
## Jan: cómo ejecutarlo

* Descargar el paquete Debian (o el correspondiente a tu SO)

```
sudo pkg -i Jan_0.6.9_amd64.deb
Jan
```

* Ajustes > Proveedores de modelo > OpenAI
* API Key «ollama»
* Base URL: http://localhost:11434/v1
* Modelos: añade uno nuevo («+»), «gemma3:1b»
* Selecciona el modelo en el chat

---

![h:500 Jan](figs/janai.png)

---
# Otros modelos auto‑alojables generativos

---
## Generar imágenes

* [Qwen‑Image](https://github.com/QwenLM/Qwen-Image), Apache 2.0 (agosto 2025)

* [HiDream‑I1](https://github.com/HiDream-ai/HiDream-I1), MIT License (julio 2025)

* [FLUX.1Kontext[dev]](https://bfl.ai/models/flux-kontext), [modelos](https://huggingface.co/collections/black-forest-labs/flux1-onnx-679d06b7579583bd84c8ef83), Licencia No Comercial de Flux (agosto 2025)

* [Stable Diffusion](https://stability.ai/stable-video), [modelos](https://huggingface.co/collections/stabilityai/stable-diffusion-35-671785cca799084f71fa2838), Licencia Comunitaria de StabilityAI (enero 2025)

[Guía para modelos de generación de imágenes de código abierto](https://www.bentoml.com/blog/a-guide-to-open-source-image-generation-models)

[Arena de texto‑a‑imagen](https://lmarena.ai/leaderboard/text-to-image)

---
## Generar video

* [Wan 2.2](https://wan.video/), [repo](https://github.com/Wan-Video/Wan2.2), Apache 2.0 (agosto 2025)
* [Hunyuan Video](https://hunyuanvideoai.com/), [repo](https://github.com/Tencent-Hunyuan/HunyuanVideo), Licencia Comunitaria de Hunyuan de Tencent
* [LTX Video](https://ltx.video/), [repo](https://github.com/Lightricks/LTX-Video), Apache 2.0* [Stable Video Diffusion](https://stability.ai/stable-video), licencia propietaria, gratuito para algunos usos

[Arena de texto‑a‑imagen y video](https://lmarena.ai/leaderboard/text-to-image)

---
## Text‑to‑video e imagen (apps & fine‑tunes)


* [ComfyUI](https://www.comfy.org/), [repo](https://github.com/comfyanonymous/ComfyUI): interfaz y UI para varios modelos self‑hostables de texto‑a‑imagen y texto‑a‑video

* [Wan2GP](https://github.com/deepbeepmeep/Wan2GP): UI y front‑end para varios modelos self‑hostables de texto‑a‑video

* [CivitAI](https://civitai.com): modelos y fine‑tunes

---
## Texto a texto (transcripción)

[Whisper](https://github.com/openai/whisper), MIT License

```
uv venv
uv pip install openai-whisper
uv run whisper speech.wav --language Spanish
```

```
#!/usr/bin/python3
import whisper

model = whisper.load_model('tiny')
transcription = model.transcribe('recording.wav')
print(transcription['text'])
```

---
## Texto a voz

* [CoquiTTS](https://github.com/idiap/coqui-ai-TTS), [modelo](https://huggingface.co/coqui/XTTS-v2), Licencia de modelo público de Coqui (2023‑11)

```
$ tts --text "Texto" \
  --model_name tts_models/es/mai/tacotron2-DDC \
  --out_path speech.wav
```

* [Kokoro](https://huggingface.co/hexgrad/Kokoro-82M), Licencia Apache 2.0 (enero 2025)

* [Higgs Audio V2](https://github.com/boson-ai/higgs-audio), Licencia Comunitaria de Higgs Audio 2 (julio 2025)

---
## Texto a voz (2)

* [Chatterbox](https://huggingface.co/ResembleAI/chatterbox), MIT License (abril 2025)

* [MeloTTS](https://github.com/myshell-ai/MeloTTS) & [OpenVoice v2](https://huggingface.co/myshell-ai/OpenVoiceV2) MIT License (febrero 2024, abril 2024)

* [FishSpeech](https://github.com/fishaudio/fish-speech), CC Attribution‑NonCommercial‑ShareAlike (agosto 2025) (noviembre 2024)

[Explorando el mundo de modelos de texto‑a‑voz de código abierto](https://www.bentoml.com/blog/exploring-the-world-of-open-source-text-to-speech-models)

---
## Otros modelos aleatorios

* Entender y razonar sobre series temporales: [ChatTS](https://huggingface.co/bytedance-research/ChatTS-14B) Apache 2.0, incluye dataset de entrenamiento (agosto 2025)

* Mundos 3D inmersivos y explorables: [HunyuanWorld](https://github.com/Tencent-Hunyuan/HunyuanWorld-1.0)

* Texto a 3D: [LlamaMesh](https://huggingface.co/Zhengyi/LLaMA-Mesh), Licencia Comunitaria de LLaMa (noviembre 2024)

* Modelo y herramientas abiertas para crear videos con IA: [OpenSora]
  * [repo](https://github.com/hpcaitech/Open-Sora)

---
## Otras aplicaciones

* [OpenCode](https://opencode.ai/): asistente, agente
  * CLI, web y app de escritorio

* [Hive](https://morapelker.github.io/hive/): orquestador para agentes de codificación

* [AnythingLLM](https://anythingllm.com/): asistente, agente

* [FastSDCPU](https://github.com/rupeshs/fastsdcpu): generación de imágenes optimizada para CPU

* [Lemonade](https://github.com/lemonade-sdk/lemonade): herramienta de generación de LLM, imágenes y voz
  * Funciona bien con Vulkan, reconoce mi GPU Intel Iris

---
## Otras aplicaciones (2)

* [OpenClaw](https://openclaw.ai/): sistema agente

* [Hermes agent](https://github.com/NousResearch/hermes-agent): sistema agente

* [Autoresearch](https://github.com/karpathy/autoresearch): agente de auto‑investigación

* [Good night, have fun](https://github.com/kunchenguid/gnhf): agente tipo auto‑investigación, para codificación

---
## Otras aplicaciones

* [SurfSense](https://www.surfsense.net/): asistente integral

    * [Código fuente](https://github.com/MODSetter/SurfSense)

* [DeerFlow](https://deerflow.tech/): asistente integral

    * [Prueba en VolcEngine](https://console.volcengine.com/)
    * [Código fuente](https://github.com/bytedance/deer-flow)

* [Hyprnote](https://github.com/fastrepl/hyprnote): herramienta de toma de notas para reuniones

* [TransformerLab](transformerlab): entrenar, afinar, chatear con LLM

    * [Código fuente](https://github.com/transformerlab/transformerlab-app)

* [MobiRAG](https://github.com/nishchaljs/MobiRAG): chatear con PDFs en tu móvil

---
## Conjuntos de datos de entrenamiento abiertos

* [Chatbot Arena Leaderboard](https://lmarena.ai/) ([Cómo funciona](https://lmarena.ai/how-it-works))
    * [Datasets](https://huggingface.co/lmarena-ai)

* [Conjuntos de datos LAION](https://laion.ai/)

* [Common Corpus: The Largest Collection of Ethical Data for LLM Pre‑Training](https://arxiv.org/abs/2506.01732)

* [The Common Pile v0.1: An 8TB Dataset of Public Domain and Openly Licensed Text](https://arxiv.org/abs/2506.05209)

* [CommonCrawl Dataset](https://commoncrawl.org/)

* [FineWeb](https://huggingface.co/datasets/HuggingFaceFW/fineweb), 18.5 T tokens limpiados de CommonCrawl

---
## Benchmarks

* [Chatbot Arena Leaderboard](https://lmarena.ai/)
* [LiveBench](https://livebench.ai/)
* [LLM Leaderboard](https://artificialanalysis.ai/leaderboards/models)

* [SWE‑bench](https://www.swebench.com/)
* [SWE‑bench‑live](https://swe-bench-live.github.io/)
