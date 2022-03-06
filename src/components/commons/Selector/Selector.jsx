import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import Creatable from "react-select/creatable";

import { customStyles, Layout, Label, Message } from "./Selector.styled";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

const STATUS = {
  DEFAULT: "default",
  ERROR: "error",
};

const Selector = forwardRef(
  ({ title, options, placeholder, message, ...props }, selectRef) => {
    return (
      <Layout>
        <Label {...props}>{title}</Label>
        {props.creatable ? (
          <Creatable
            styles={customStyles(props)}
            options={options}
            placeholder={placeholder}
            ref={selectRef}
            {...props}
          />
        ) : (
          <Select
            styles={customStyles(props)}
            options={options}
            placeholder={placeholder}
            ref={selectRef}
            {...props}
          />
        )}

        <Message {...props}>{message}</Message>
      </Layout>
    );
  }
);

Selector.propTypes = {
  theme: PropTypes.oneOf(Object.values(THEME)),
  status: PropTypes.oneOf(Object.values(STATUS)),
  options: PropTypes.array,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  isMulti: PropTypes.bool,
};

Selector.defaultProps = {
  theme: THEME.LIGHT,
  status: STATUS.DEFAULT,
  options: [
    { value: "Android", label: "Android" },
    { value: "Angular", label: "Angular" },
    { value: "Apache", label: "Apache" },
    { value: "Azure", label: "Azure" },
    { value: "C", label: "C" },
    { value: "C#", label: "C#" },
    { value: "C++", label: "C++" },
    { value: "Django", label: "Django" },
    { value: "Docker", label: "Docker" },
    { value: "Electron", label: "Electron" },
    { value: "Emotion", label: "Emotion" },
    { value: "Flask", label: "Flask" },
    { value: "Flutter", label: "Flutter" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "Gradle", label: "Gradle" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Go", label: "Go" },
    { value: "HTML5", label: "HTML5" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "Jest", label: "Jest" },
    { value: "Jpa", label: "Jpa" },
    { value: "jQuery", label: "jQuery" },
    { value: "Keras", label: "Keras" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "kubernetes", label: "kubernetes" },
    { value: "Linux", label: "Linux" },
    { value: "MariaDB", label: "MariaDB" },
    { value: "Matplotlib", label: "Matplotlib" },
    { value: "MobX", label: "MobX" },
    { value: "mongoDB", label: "mongoDB" },
    { value: "Mybatis", label: "Mybatis" },
    { value: "MySQL", label: "MySQL" },
    { value: "Next.js", label: "Next.js" },
    { value: "NGiNX", label: "NGiNX" },
    { value: "Node.js", label: "Node.js" },
    { value: "Numpy", label: "Numpy" },
    { value: "Nuxt.js", label: "Nuxt.js" },
    { value: "Pandas", label: "Pandas" },
    { value: "parcel", label: "parcel" },
    { value: "php", label: "php" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "Python", label: "Python" },
    { value: "PyTorch", label: "PyTorch" },
    { value: "R", label: "R" },
    { value: "Rails", label: "Rails" },
    { value: "Raspberry-Pi", label: "Raspberry-Pi" },
    { value: "React", label: "React" },
    { value: "React-Native", label: "React-Native" },
    { value: "React-Query", label: "React-Query" },
    { value: "Recoil", label: "Recoil" },
    { value: "Redis", label: "Redis" },
    { value: "Redux-Saga", label: "Redux-Saga" },
    { value: "Redux", label: "Redux" },
    { value: "Ruby", label: "Ruby" },
    { value: "Sass", label: "Sass" },
    { value: "Scala", label: "Scala" },
    { value: "SQL", label: "SQL" },
    { value: "Spring", label: "Spring" },
    { value: "Spring-Boot", label: "Spring-Boot" },
    { value: "Storybook", label: "Storybook" },
    { value: "styled-components", label: "styled-components" },
    { value: "Svelte", label: "Svelte" },
    { value: "Swift", label: "Swift" },
    { value: "SWR", label: "SWR" },
    { value: "Tailwind-CSS", label: "Tailwind-CSS" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "Unity", label: "Unity" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Vuex", label: "Vuex" },
    { value: "WebAssembly", label: "WebAssembly" },
    { value: "webpack", label: "webpack" },
  ],
  placeholder: "Placeholder",
  isMulti: false,
};

export default Selector;
