# Thermal UI Components
[![build status](https://img.shields.io/travis/pkrawc/thermal-ui/master.svg?style=flat-square)](https://travis-ci.org/pkrawc/thermal-ui)
[![npm version](https://img.shields.io/npm/v/thermal-ui.svg?style=flat-square)](https://www.npmjs.com/package/thermal-ui)

:fire::fire::fire:

## Usage
```bash
npm install react styled-components thermal-ui
```


## Table of Contents
+ [Layout](#layout)
  + [Column](#column)
  + [Container](#container)
  + [Row](#row)
+ [Typography](#typography)
  + [Hero](#hero)
  + [Headline](#headline)
  + [Title](#title)
  + [Subtitle](#subtitle)
  + [Text](#text)
+ [General](#general)
  + [Button](#button)
  + [Icon](#icon)
+ Navigation
  + BottomBar
  + Breadcrumb
  + Dropdown
  + Menu
  + Tabs
  + TopBar
  + Steps
+ Fields
  + Checkbox
  + DatePicker
  + Form
  + Input
  + Radio
  + Rate
  + Select
  + Slider
  + Switch
  + Upload
+ Display
  + Badge
  + Card
  + Carousel
  + Calendar
  + Timeline
  + Table
+ Feedback
  + Alert
  + Dialogue
  + Loader
  + Notification
  + ProgressBar

## Layout
Standard display components to build your app in the cleanest way possible.

### Container
```javascript
<Container flex flexColumn padded>
  children
</Container>
```

### Column
```javascript
<Column smCol={12} mdCol={12} lgCol={12}>
  children
</Column>
```
### Row
```javascript
<Row>
  <Column></Column>
  <Column></Column>
  <Column></Column>
</Row>
```

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

### Title
```javascript
<Title right center color="#F9F9F9">
  Lorem Ipsum Title
</Title>
```

### Subtitle
```javascript
<Subtitle right center color="#F9F9F9">
  Lorem Ipsum Subtitle
</Subtitle>
```

### Text
```javascript
<Text right center color="#F9F9F9">
  Lorem Ipsum Text
</Text>
```

## General


## Contributing
1. Make sure your contribution is aligned with the Style Guide
1. Submit a PR
1. On PR approval:
  - merge into master
  - pull master locally
  - `npm version <major|minor|patch> -m "tell us about the change"`
  - `git push origin master && git push origin v<version-npm-gives-you>`
1. Profit???
