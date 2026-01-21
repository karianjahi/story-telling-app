# Story Telling App (Workshop)

Build a small storytelling app where users click a **genre button** (Scary, Funny, Adventure) to display a short story and change the **border color** of the story container.

## What you’ll build
- Headline: **“Want to hear a short story?”**
- 3 buttons: Scary / Funny / Adventure
- A result area that shows the selected story
- A container border that updates based on the genre

## Project files

```bash
story-telling-app/
├── index.html
├── styles.css
└── script.js
```



## HTML tasks
1. Add an `h1` with the workshop text.
2. Create a `main.story-container`.
3. Inside it, add a `div.btn-container` with 3 buttons:
   - class: `btn`
   - ids: `scary-btn`, `funny-btn`, `adventure-btn`
4. Add a `p#result` under the buttons to display the story.
5. Link `script.js` at the end of the body.

## CSS (provided)
The provided `styles.css` handles:
- Dark theme + centered layout
- Button styling + hover effects
- Responsive button layout (column → row at 760px)
- Default border on `.story-container`

## JavaScript tasks
1. Select and store:
   - `.story-container` → `storyContainer`
   - the three buttons → `scaryStoryBtn`, `funnyStoryBtn`, `adventureStoryBtn`
   - `#result` → `resultParagraph`
2. Create `storyObj` with keys: `scary`, `funny`, `adventure`  
   Each contains:
   - `story` (text)
   - `borderColor` (hex color)
3. Write `displayStory(genre)`:
   - verify the genre exists in `storyObj`
   - update `resultParagraph.textContent`
   - update `storyContainer.style.borderColor` (and ensure a visible border)
4. Add click listeners so each button calls `displayStory()` with its genre.

## Done checklist
- [ ] Clicking a button shows the correct story in `#result`
- [ ] The container border color changes per genre
- [ ] Layout stays responsive (buttons stack on small screens)

## Extensions (optional)
- Add more genres
- Random story per genre
- Add active-button highlighting
- Smooth border transitions in CSS






