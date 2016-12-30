# Thermal UI Components
[![build status](https://img.shields.io/travis/pkrawc/thermal-ui/master.svg?style=flat-square)](https://travis-ci.org/pkrawc/thermal-ui)
[![npm version](https://img.shields.io/npm/v/thermal-ui.svg?style=flat-square)](https://www.npmjs.com/package/thermal-ui)


`
npm install react styled-components thermal-ui
`

- [Typography](#typography)
  - [Hero](#hero)
  - [Headline](#headline)
  - Title
  - Subtitle
  - Text
- General
  - Button
  - Icon
- Navigation
  - BottomBar
  - Breadcrumb
  - Dropdown
  - Menu
  - Tabs
  - TopBar
  - Steps
- Fields
  - Checkbox
  - DatePicker
  - Form
  - Input
  - Radio
  - Rate
  - Select
  - Slider
  - Switch
  - Upload
- Display
  - Badge
  - Card
  - Carousel
  - Calendar
  - Timeline
  - Table
- Feedback
  - Alert
  - Dialogue
  - Loader
  - Notification
  - ProgressBar

## Typography
A set of wrappers to create consistent and styled text, no matter the screen

### Hero
```javascript
<Hero right center color="#F9F9F9">
  Lorem Ipsum Hero
</Hero>
```
### Headline
```javascript
<Headline right center color="#F9F9F9">
  Lorem Ipsum Headline
</Headline>
```

## Contributing
1. Make sure your contribution is aligned with the Style Guide
1. Submit a PR
1. On PR approval:
  - merge into master
  - pull master locally
  - `npm version <major|minor|patch> -m "tell us about the change"`
  - `git push origin master && git push origin v<version-npm-gives-you>`
1. Profit???
