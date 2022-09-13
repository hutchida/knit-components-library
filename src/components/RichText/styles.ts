import styled from "styled-components"

export const HTMLText = styled.div`
margin: 0 auto;
@media (min-width: 768px) {
  max-width: 50vw;
}

strong {
  font-weight: bold;
}
code {
  color: black;
  float: left;
  font-family: Georgia;
  font-size: 60px;
  line-height: 61px;
  padding-right: 8px;
  padding-left: 3px;
}

img {
  border-radius: 0.5rem;
  margin: auto;
}

.caption {
  color: #292B29;
  text-align: center;
  text-transform: uppercase; 
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.7
}

a {
  text-decoration: none;
  color: #6663fd;
  border-bottom: 1px solid black;
  word-wrap: break-word;
  }


h1 {
  font-size: 2em;
  font-weight: 500;
}

h2 {
  font-size: 1.5em;
  font-weight: 500;
}

h3 {
  font-size: 1.17em;
  font-weight: 500;
}

h4 {
  font-size: 1em;
  font-weight: 500;
}

h5 {
  font-size: 0.83em;
  font-weight: 500;
}

h6 {
  font-size: 0.67em;
  font-weight: 500;
}

b, strong {
  font-weight: 900;
}

ul {
  list-style-type: none;
}

ul li {
  margin-left: 30px;
}

ul li:before {
  content: '—';
  position: absolute;
  margin-left: -35px;
}

ol {
  counter-reset: oe-counter;
  padding-left: 40px;
}

ol li {
  counter-increment: oe-counter;
  position: relative;
  padding-bottom: 20px;
  padding-left: 20px;
  vertical-align: top;
}

ol li::before {
  content: counter(oe-counter);
  position: absolute;
  --size: 38px;
  left: calc(-1 * var(--size) - 10px);
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  top: 5px;
  border-radius: 50%;
  text-align: center;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><path d='M21.7534 36.5881C20.0827 37.6884 17.9173 37.6884 16.2466 36.5881C15.1653 35.8761 13.8829 35.5325 12.5905 35.6085C10.5934 35.7259 8.71819 34.6433 7.82138 32.855C7.241 31.6978 6.30223 30.759 5.14496 30.1786C3.35675 29.2818 2.27407 27.4065 2.39152 25.4095C2.46753 24.1171 2.12391 22.8347 1.41188 21.7534C0.311642 20.0827 0.311642 17.9173 1.41188 16.2466C2.12391 15.1653 2.46753 13.8829 2.39152 12.5905C2.27407 10.5934 3.35675 8.71819 5.14496 7.82138C6.30223 7.241 7.241 6.30223 7.82139 5.14496C8.71819 3.35675 10.5934 2.27407 12.5905 2.39152C13.8829 2.46752 15.1653 2.12391 16.2466 1.41188C17.9173 0.311641 20.0827 0.311641 21.7534 1.41188C22.8347 2.12391 24.1171 2.46753 25.4095 2.39152C27.4066 2.27407 29.2818 3.35674 30.1786 5.14496C30.759 6.30223 31.6978 7.241 32.855 7.82138C34.6433 8.71819 35.7259 10.5934 35.6085 12.5905C35.5325 13.8829 35.8761 15.1653 36.5881 16.2466C37.6884 17.9173 37.6884 20.0827 36.5881 21.7534C35.8761 22.8347 35.5325 24.1171 35.6085 25.4095C35.7259 27.4066 34.6433 29.2818 32.855 30.1786C31.6978 30.759 30.759 31.6978 30.1786 32.855C29.2818 34.6433 27.4066 35.7259 25.4095 35.6085C24.1171 35.5325 22.8347 35.8761 21.7534 36.5881Z' fill='none' stroke='black' stroke-width='1' stroke-linejoin='round'/></svg>");
}

p {
  padding: 0.25rem 0;
}


table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #D4DED3;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #D4DED3;
}
`