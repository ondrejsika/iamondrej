import React from "react";

let Wrapper = (props) => {
  return (
    <body
      style={{
        margin: 0,
        marginBottom: "7em",
        padding: 0,
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "40em", margin: "2em auto" }}>
        <div style={{ margin: "2em" }}>{props.children}</div>
      </div>
    </body>
  );
};

let Image = (props) => {
  return <img src={props.src} style={{ borderRadius: "50%", width: "10em" }} />;
};

let Header = (props) => {
  return <h1 style={{ margin: "0.3em" }}>{props.children}</h1>;
};

let Tags = (props) => {
  return (
    <span
      style={{
        display: "block",
        fontSize: "1.2em",
        marginBottom: "1.2em",
        fontWeight: "bold",
      }}
    >
      {props.children}
    </span>
  );
};

let Button = (props) => {
  return (
    <a
      style={{
        display: "block",
        border: "solid 2px",
        fontSize: "1.2em",
        padding: "0.8em",
        margin: "0.7em 0",
        color: "black",
        textDecoration: "none",
      }}
      href={props.link}
    >
      {props.children}
    </a>
  );
};

let Page = () => {
  return (
    <>
      <title>@ondrejsika, Ondrej Sika</title>

      <Wrapper>
        <Image src="/ondrejsika4_200px.jpg" />
        <Header>@ondrejsika</Header>
        <Tags>#Liberty #Bitcoin #Pilot #DevOps #SRE</Tags>

        <Button link="https://ukrajina.ondrejsika.com">
          ❤️ 🇺🇦 ukrajina.ondrejsika.com (pomoc ukrajine)
        </Button>
        <Button link="https://ondrejsika.com">ondrejsika.com (personal)</Button>
        <Button link="https://sika.io">sika.io (freelance)</Button>
        <Button link="https://sikalabs.com">SikaLabs</Button>
        <Button link="https://trainera.io">Trainera</Button>
        <Button link="https://facebook.com/ondrejsika">
          Facebook @ondrejsika
        </Button>
        <Button link="https://instagram.com/ondrejsika">
          Instagram @ondrejsika
        </Button>
        <Button link="https://twitter.com/ondrejsika">
          Twitter @ondrejsika
        </Button>
        <Button link="https://github.com/ondrejsika">Github @ondrejsika</Button>
      </Wrapper>
    </>
  );
};

export default Page;
