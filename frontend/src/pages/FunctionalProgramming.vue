<template>
  <BaseTemplateVue>
    <article>
      <h2>Functional Programming</h2>
      <p>
        Hi there. In this section I want to write about functional programming.
        My main goal with this is to have an output for the things I learned and
        am still learning on that topic.
      </p>
      <p>
        The first time functional programming entered my radar was in 2020 when
        I got into contact with a company providing training programms for
        programmers. While discussing the structure of the training for frontend
        development with modern javascript frameworks (in our case Vuejs) the
        term functional programming suddenly popped up. At that point I only
        knew about object-oriented programming and I understood that functional
        programming is a programming paradigm.
      </p>
      <p>
        Some time passed though without diving further into the topic. The
        training also didn't happen as we frontend developers didn't know
        anything about it and deemed it not the right fit.
      </p>
      <p>
        One day though, I had to work out a job position. I started of with a
        template we already had from previous job descriptions. It had some of
        the typical requirements such as what type of languages the applicant
        has to know, frameworks, SOLID principles, KISS, DRY, yadi yadi....
        Somehow the point about the SOLID principles bothered me. Isn't that
        something from object oriented programming? Does it matter if the
        applicant prefers to code in OO or another paradigm? These questions led
        me to the quest of finding out whether SOLID principles apply to
        functional programming just as they apply to object oriented
        programming. To be honest, I don't really know as the community seems to
        be pretty divided on that topic, but while I was researching I stumbled
        upon the following video.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/E8I19uA-wGY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        The one thing which stuck with me from that video is the train track
        analogy for manipulating data which I see as a beatiful way of
        explaining the core principles of functional programming.
      </p>

      <p>
        Later on, I discovered category theory, the mathematical backbone behind
        functional programming. I started studying the lecturs by Bartosz
        Milewski on category theory and found much joy combining the abstract
        logic of CT with practices of FP. Below a link to the playlist on
        category theory by Bartosz Milewski:
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p>
        In the following sections I will try to break down some of the concepts
        and practices of functional programming.
      </p>

      <h3>Pure Functions and Procedures</h3>
      <p>
        <span class="font-bold">Pure functions</span> is one of the first
        concepts I learned about when diving into the topic of functional
        programming. A function is considered pure when the following two
        properties apply.
      </p>
      <ul>
        <li>
          The function is deterministic, i.e. for a specific input the same
          output is returned
        </li>
        <li>
          The function doesn't produce side-effects. Examples of side-effects
          are logging, requests, DOM manipulations, etc.
        </li>
      </ul>
      <p>
        In mathematical terms a function defines a mapping between an input to
        an output. In programming this is simply called a
        <span class="font-bold">pure function</span>.
      </p>
      <p>
        However, for many applications to behave properly, side-effects are
        necessary. Functions which perform a side-effect are called
        <span class="font-bold">procedures</span>
      </p>

      <highlightjs
        language="typescript"
        code="// pure function
function double(value: number): number {
  return value * 2
}
"
      />
      <highlightjs
        language="typescript"
        code="// procedure
function addDivToBody(text: string): void {
  const body = document.body;
  const div = document.createElement('div')
  const textNode = document.createTextNode(text)
  div.appendChild(textNode);
  body.appendChild(div)
}
"
      />

      <h3>Immutability</h3>
      <p>
        The term immutability refers to variables which are defined once and
        never manipulated again. Some programming languages work such that a
        prevention for variable manipulation is built-in. Other languages do not
        apply any restrictions and you as a developer are responsible to write
        code which obeys immutability. One way to do so is to write pure
        functions (as described in the previous section).
      </p>
      <p>
        The question remains, why do I care? Immutability allows for thread-safe
        code
      </p>
    </article>
  </BaseTemplateVue>
</template>

<script setup lang="ts">
import BaseTemplateVue from "@/components/BaseTemplate.vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";
const highlightjs = hljsVuePlugin.component;
</script>
