import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row" >
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you need more tips?</h2>
              <p>Sign up free and get the latest tips.</p>
              <form className="form-section">
            <div style={{display:"flex",justifyItems:"center",justifyContent:"center"}}>
                <input placeholder="Your Email..." name="email" type="email" />
                <input style={{marginTop:"-10"}}value="Yes. I want!" name="subscribe" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
