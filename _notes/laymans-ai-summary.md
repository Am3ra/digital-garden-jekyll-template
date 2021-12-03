---
---

topic: [[short trek]] [[deep learning]]

This is a short summary for the latest breakthroughs and applications for deep learning (precursor for AI) techniques. I will divide them in three broad types: Computer Vision,  Natural Language Processing (NLP), and Others. Check it out on my linkedin!


A great resource for learning and keeping up-to-date about this topic is [Two Minute Papers on Youtube](https://www.youtube.com/c/K%C3%A1rolyZsolnai/videos).

- [Basic Theory](#basic-theory)
- [Computer vision](#computer-vision)
- [Natural language processing](#natural-language-processing)
- [Other Domains](#other-domains)
- [Problems](#problems)

# Basic Theory

Machine learning is, in short, a method to find a function which maps an input, to its expected output. In practice, it means that for any task which has a large enough data set which connects an input with its respective expected output, it is possible to construct a neural network which learns the relationship that connects the two, and which given an input, can predict what the output should be. The term prediction is used for the output of the neural network as there is a degree of uncertainty associated with it.

# Computer vision

Something which was almost impossible 10 years ago, and is trivial now, is image classification. This means that there are (and have been) systems that are currently available, which can accurately describe the contents of an image with a high degree of precision. The manner in which this was achieved is basically as described above, a sufficiently large neural network was trained to learn the relationship between images and labels assigned by humans.

Though this might not seem interesting to some (or even difficult), this is foundational for many new technologies. Describing images implies an "understanding" of shapes, geometries, and light among others, which only animals have been able to demonstrate until now. Additionally, it means that it is able to assign a very "fuzzy" human-useful label that connects an abstract and impossible-to-completely-define concept to a concrete example. No more describing humans as a featherless biped.

This connection of abstract concept to concrete example was relatively easily reversed, and it is now possible to supply a model with a description, and have it produce an image in any style you want, with any content you want. Yes this includes photo-realistic images of people. [Don't believe me, check it out!](https://openai.com/blog/dall-e/).

Additionally, it's recently become trivial to modify an existing image to change almost any characteristic of the image, such as background, position and direction of heads, even the expression of faces, or age.

So, even though this is a basic task, an incredible number of jobs depend on image generation or classification. For example, a radiologist is basically a classifier of x-ray images, and determines if they are normal or abnormal, and why. Graphic designers' whole job is image creation, something much simpler now.

# Natural language processing

One of the most complex tasks in machine learning has been to process and understand naturally written text. Harder still is generating naturally written text.

One of the first tasks to be successfully achieved was sentiment analysis. This means that arbitrary texts can be analyzed to detect the emotions that the words express.

Afterwards, in late 2020, Google Deepmind AI created one of the largest models ever, GPT-3, which is capable of producing incredibly realistic texts, of any length, any topic, and any amount. In the age of "fake news", this is problematic to say the least. All these technologies are.

Using this model, some savvy users realized that natural text generation is almost exactly the same problem as programming. As a result, they were able to leverage the exact same model (without changing anything) to produce incredible interfaces [(here's an example of the model)](https://gpt3demo.com/apps/text-to-ui-creator-figma) only by describing it. Later, they were able to produce complex applications, again, only by describing their function and how they should look, not by programming directly.

Now, we have a generally direct path to produce human-like text in any domain. Need a survey? GPT-3 can create the questions, and if you want, even the answers. Need an article written? No problem. Need a web page? GPT-3 can program it. Need an app? Soon, no problem.

If you aren't counting the jobs that can be replaced in percentages or in tens of millions, you're counting wrong.

# Other Domains

If you aren't a little bit scared, you're probably not paying attention. Let me be clear, after thinking about this a while, I haven't been able to think of any job that machines couldn't possibly do better than humans. Here are some 'difficult' jobs which can already be automated to a degree

- [x] Doctor
	- Check out Watson by IBM
- [x] Pilot
- [x] Artist
	- [x] Musician
	- [x] Digital Artist
	- [x] Designer
	- [x] Architect
- [x] Lab researcher
- [x] Accountant
- [x] Programmer
	- Not completely, but definitely doable in the future.
- [x] Chauffeur
	- Do you know what percentage of people work in transportation? In the US, 12.5 million people, or approximately 4%
- etc.
  
The reason why this is possible is two-fold:

1. Computer processing has advanced exponentially for the last 40+ years.
2. Computer processing has allowed for the development of deep learning techniques, which can approximate any function to an arbitrary degree of precision, given enough data.

This means that any job (which in our case is every job), which can be described as a function that takes an input and produces an output, can be replaced (in theory at least) by a neural network. As an example, a psychiatrist takes an input (a patient), and through a mix of talking (Natural language), and medicine, produces an output (an improved patient). This is automatable.

# Problems

One of the clearest problems with this is the fact that enough care has not been taken to ensure that the outputs of our models are good for humans. This issue is the core of [[ai safety]]. An example of this is facebook. The model that it has seeks to maximize user retention and usage, so its input is user behaviors, and it creates predictions of how long a user will stay and pay attention with respect to which posts are shown to them. However, one of the best ways to keep a user actively engaged is to show them provocative news, or things that make them feel strong emotions, and which emotion is stronger than anger? This is one cause to why we've seen a high amount of radicalization lately (anti-vaccination for example). A great documentary that covers this topic in great Depth is "The social Dilemma", available on Netflix. I highly recommend it.