# Corporate Ipsum (cipsum)

A tiny library that generates random corporate text. See https://dirkjf.github.io/cipsum/ for an implementation.

## Installation
`yarn add -D @dirkjf/cipsum` or `npm install @dirkjf/cipsum ---save-dev`

## Usage

```javascript
import { cipsumSentence, cipsumParagraph } from '@dirkjf/cipsum';

cipsumSentence() // Returns a string conaining one sentence.
cipsumSentence(4) // Returns a string conaining four sentences.
cipsumParagraph(3) // Returns an array conaining three paragraphs.

```
