import React, { Component } from "react";
// import Header from "../components/header/Header";
// import Greeting from "./greeting/Greeting";
// import Skills from "./skills/Skills";
// import StackProgress from "./skillProgress/skillProgress";
// import WorkExperience from "./workExperience/WorkExperience";

import Projects from "./Projects/Projects";
import WhatIDo from "./WhatIDo/WhatIDo";
import Tools from "./Tools/Tools";

import IDoAnimate from "./WhatIDo/IDoAnimate2.js";
import { WhatIDoText } from "../porfolio";

// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
// import Contact from "./contact/Contact";
// import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
// import Top from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";
// import Profile from "./profile/Profile";

export default class Main extends Component {
  render() {
    console.log(WhatIDoText);
    return (
      <div>
        <WhatIDo text={WhatIDoText} align={{ flexDirection: "rowReverse" }} />
        <Tools />

        <Projects />

        {/* <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile />
        <Footer />
        <Top /> */}
      </div>
    );
  }
}
