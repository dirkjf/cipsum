# Corporate Ipsum (cipsum)

> Random corporate text generator. See https://dirkjf.github.io/cipsum/ for a demo.

## Installation
`yarn add -D @dirkjf/cipsum`

## Usage

```javascript
import { cipsumSentence, cipsumParagraph } from '@dirkjf/cipsum';

cipsumSentence() // Returns a string conaining one sentence.
cipsumSentence(4) // Returns a string conaining four sentences.
cipsumParagraph(3) // Returns an array conaining three paragraphs.

```
