## To produce PNGs of some slides

pdftk slides.pdf cat 1 output title.pdf
convert -density 300 title.pdf title.png

pdftk slides.pdf cat 4 output should-we-worry.pdf
convert -density 300 should-we-worry.pdf should-we-worry.png

pdftk slides.pdf cat 14 output eu-analysis.pdf
convert -density 300 eu-analysis.pdf eu-analysis.png

pdftk slides.pdf cat 44 output guidelines.pdf
convert -density 300 guidelines.pdf guidelines.png

pdftk slides.pdf cat 53 output git.pdf
convert -density 300 git.pdf git.png

pdftk slides.pdf cat 114 output probe-further.pdf
convert -density 300 probe-further.pdf probe-further.png

pdftk slides.pdf cat 115 output probe-further-1.pdf
convert -density 300 probe-further-1.pdf probe-further-1.png

pdftk slides.pdf cat 116 output credits.pdf
convert -density 300 credits.pdf credits.png

pdftk slides.pdf cat 117 output license.pdf
convert -density 300 license.pdf license.png
