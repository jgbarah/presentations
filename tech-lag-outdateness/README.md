# Characterizing outdateness with technical lag

"Characterizing outdateness with technical lag: an exploratory study", presented at [SoHeal 2020](https://soheal.github.io/)

* [Preprint](https://zenodo.org/record/3922249#.XvotLiWxUrJ)
* [Slides](slides.pdf)

**Abstract:**

Background: Nowadays, many applications are built reusing a large number of components, retrieved from software collections such as npm (JavaScript) or PyPi (Python). Those components are built in their corresponding upstream repositories, where they are being developed. This architecture of reusing causes some constraints on how much outdated is an application when it is deployed in production environments.
 
Goal: To understand how outdateness of applications, and the components on which they depend, can be computed, so that different situations can be measured and assessed with the help of metrics. Based on this understanding, we also want to produce a model to characterize ecosystems (collections of reusable components).

Method: Use the technical lag framework to analyze the flows from upstream repositories, to collection of components, to application building and later deployment. Using this framework, analyze lag in version availability in each of these stages, and constraints that set limits on how much outdated can be deployed applications.

Results: We define a model which allows us to better understand the factors that influence outdateness of an application produced with reusable components from repositories of components. The model allows us to find the factors for defining metrics for measuring outdateness, and to explore the factors that influence outdateness for components in applications. We propose some of those factors as the basis to characterize ecosystems or collections of components with respect to their impact on the outdateness of applications built with them.

Conclusions: Technical lag is an appropriate framework for studying lags in version propagation from upstream development to deployment.