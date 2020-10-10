---
title: "NLP Preprocessing"
date: 2020-10-04
tags: [machine learning, nlp, data science]
header: 
  images: "/images/nlp/preprocessingphoto1.jpg"
excerpt: "Machine learning, nlp, Data Science"
mathjax: "true"
---
<p align="justify">  Natural language processing is a very popular field of study today. It can be defined as the processing and analysis of natural spoken languages with today's technology and methods. Various applications are developed. Some NLP use cases can be listed as follows: </p>

1. Sentiment analysis
2. Text classification
3. Machine translation
4. Question answering (chat-bot)
5. Text summarization and so on ...

<p align="justify">  For NLP tasks, we will use the Python **NLTK (Natural Language Toolkit)** package. This package can be defined as: platform to work with human language data. </p>
* Install NLTK : `pip3 install nltk`
+ Go to [this](https://pypi.org/project/nltk/) page and download package.

```python
import nltk  #import nltk package
print(nltk.__version__)  #check package version
#install the necessary datasets/models for specific functions to work.Like:'popular'
nltk.download(‘popular’)
```
```python
#Tokenization process is performs the process of dividing the string of data into substrings.
from nltk.tokenize import word_tokenize
print(word_tokenize("Hi, this is my first example with NLP."))
```
Output:  ['Hi', ',', 'this', 'is', 'my', 'first', 'example', 'with', 'NLP', '.'] 

```python
#Word root finding is a common process in NLP. The root finding process is called word stemmer. 
#Finding roots can be done with the following class.The process is based on the Porter Stemmer algorithm.

from nltk.stem.porter import PorterStemmer
rootWord = PorterStemmer()
print(rootWord.stem("going"))
print(rootWord.stem("constitues"))
```
Output: `go   constitu `

- <p align="justify"> Lemmatization performs the converting a word to its base. It can be said that it is more careful in finding the word base compared to Stemming. Because we should define the "part-of-speech" (POS) tag for the word. In other words, it is the definition of words as noun, verb, adjective, adverb etc. </p>
+ <p align="justify"> We can also find tags like in the second example. First break the string into substrings, then find the word base.  </p>

```python
from nltk.tag import pos_tag
from nltk.stem.wordnet import WordNetLemmatizer

rootWord=WordNetLemmatizer()
print(rootWord.lemmatize('constitutes','v'))

sample = "Hi, this is my first example with NLP."
print(pos_tag(word_tokenize(sample)))
```
Output: ` constitute `
[('Hi', 'NNP'), (',', ','), ('this', 'DT'), ('is', 'VBZ'), ('my', 'PRP$'),
('first', 'JJ'), ('example', 'NN'), ('with', 'IN'), ('NLP', 'NNP'), ('.', '.')]

- <p align="justify"> When working with data, we can say that the first thing to do is "data cleaning". The first cleanup for text data is to remove punctuation marks. These are called "punctuations". The defined punctuation marks in the first code block below can be observed. </p>
- <p align="justify"> Another data cleaning step is removing stop words for text data. Stop-words can define as low-meaning word for text data. They are very intense in the text and may negatively affect the actual desired process due to the possibility of high frequencies. It is important to perform this process, especially for sentiment analysis. You can see basic stop-words process in the second code block below. </p>

```python
import string
print(string.punctuation) # !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

sample= "Remove ~ punctuations , from,  here * ? " # example string
no_punctuation = "" # this will contain the new string without punctuation.

for i in sample:    # divide string and take one by one 
    if i not in string.punctuation:  # control each , if its not punctuation, include new string
        no_punctuation += i
    else:  # if its punctuation just pass 
        pass
    
print(no_punctuation)  # print new string
```
Output: `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~ `
` Remove  punctuations  from  here `

```python
from nltk.corpus import stopwords
print(stopwords.words('english')) # print list of "stop-words in English language

sample = "Remove the stop words from the sentence. It will be clearer." # example string

no_stopwords = "" # this will contain the new string without any stop-words.
a = stopwords.words('english')

for i in sample:  # divide string and take one by one 
    if i not in a: # control each, if its not stop-words, include new string
        no_stopwords += i
    else:   # if its stop-words just pass 
        pass

print(sample) # print given example to compare with the new string which is without stop-words
print(no_stopwords)  # print new string
```

