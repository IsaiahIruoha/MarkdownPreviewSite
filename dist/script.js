import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import * as redux from "https://cdn.skypack.dev/redux@4.2.1";

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "window", id: "editor-window", style: { display: this.props.expandedPreview ? "none" : "block" } }, /*#__PURE__*/
      React.createElement("p", null, "Edit Window"), /*#__PURE__*/
      React.createElement("a", { href: "#editor-window" }, /*#__PURE__*/React.createElement("svg", { className: "editIcon", viewBox: "0 0 576 512", width: "26", title: "edit" }, /*#__PURE__*/
      React.createElement("path", { d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" }))), /*#__PURE__*/

      React.createElement("a", { onClick: this.props.handleClickEdit }, this.props.expandedEdit ? /*#__PURE__*/React.createElement("svg", { className: "expandIcon", viewBox: "0 0 448 512", width: "22", title: "expand-arrows-alt" }, /*#__PURE__*/
      React.createElement("path", { d: "M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z" })) : /*#__PURE__*/
      React.createElement("svg", { className: "shrinkIcon", viewBox: "0 0 512 512", width: "25", title: "compress-arrows-alt" }, /*#__PURE__*/
      React.createElement("path", { d: "M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z" }))), /*#__PURE__*/

      React.createElement("div", { className: "divider" }), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("textarea", {
        style: { height: this.props.expandedEdit ? "80px" : "500px" },
        id: "editor", type: "text", onInput: this.props.handleChange },
      this.props.text)));



  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview-window", className: "window", style: { margin: this.props.expandedPreview ? "30px auto -40px" : "50px auto -40px" } }, /*#__PURE__*/
      React.createElement("p", null, "Preview Window"), /*#__PURE__*/
      React.createElement("a", { href: "#preview" }, /*#__PURE__*/React.createElement("svg", { className: "previewIcon", viewBox: "0 0 512 512", width: "22", title: "binoculars" }, /*#__PURE__*/
      React.createElement("path", { d: "M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z" }))), /*#__PURE__*/

      React.createElement("a", { onClick: this.props.handleClickPreview }, !this.props.expandedPreview ? /*#__PURE__*/React.createElement("svg", { className: "expandIcon", viewBox: "0 0 448 512", width: "22", title: "expand-arrows-alt" }, /*#__PURE__*/
      React.createElement("path", { d: "M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z" })) : /*#__PURE__*/
      React.createElement("svg", { className: "shrinkIcon", viewBox: "0 0 512 512", width: "25", title: "compress-arrows-alt" }, /*#__PURE__*/
      React.createElement("path", { d: "M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z" }))), /*#__PURE__*/

      React.createElement("div", { className: "divider" }), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { id: "preview" }, /*#__PURE__*/
      React.createElement("p", { id: "preview-text", dangerouslySetInnerHTML: { __html: marked.parse(this.props.text) } }))));



  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `# Markdown Previewer

[![Markdown Previewer](https://static.vecteezy.com/system/resources/thumbnails/002/363/076/small/computer-icon-free-vector.jpg "Using React!")](isaiahiruoha.com)

## FreeCodeCamp | Front End Libraries Projects

A *FreeCodeCamp* challenge on using front end libraries to build a markdown previewer with the below user stories to be fulfilled:

> **Required**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

> **Optional Bonus**
> 1. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).

---

\`\`\`                      
   <p>Hello world! This is HTML CODE BLOCK.</p>          
\`\`\`

---

#### More about the challenge [Build a Markdown Previewer](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).
#### See it in action [HERE](https://github.com/IsaiahIruoha).`,

      expandedEdit: true,
      expandedPreview: false };

    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickPreview = this.handleClickPreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickEdit() {
    this.setState({
      expandedEdit: !this.state.expandedEdit });

  }
  handleClickPreview() {
    this.setState({
      expandedPreview: !this.state.expandedPreview });

  }
  handleChange(event) {
    this.setState({
      text: event.target.value });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "app-window" }, /*#__PURE__*/
      React.createElement(Edit, { expandedEdit: this.state.expandedEdit, handleClickEdit: this.handleClickEdit, expandedPreview: this.state.expandedPreview, text: this.state.text, handleChange: this.handleChange }), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement(Preview, { expandedPreview: this.state.expandedPreview, handleClickPreview: this.handleClickPreview, text: this.state.text })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('content'));