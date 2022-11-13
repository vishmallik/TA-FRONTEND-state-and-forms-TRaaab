export default function Step1(props) {
  let { step, f_name, l_name, address, email, dob, errors } = props.state;
  if (step === 1) {
    return (
      <div className="flex step">
        <div>
          <img src="/images/pic1.jpg" alt="step1" />
        </div>
        <div>
          <div className="nav flex justify-start">
            <span className={step === 1 ? "active" : ""}>1</span>
            <p>Sign Up</p>
            <span className={step === 2 ? "active" : ""}>2</span>
            <p>Message</p>
            <span className={step === 3 ? "active" : ""}>3</span>
            <p>Checkbox</p>
          </div>
          <hr />
          <small>Step {step}/3</small>
          <h2>Sign Up</h2>
          <div className="flex">
            <fieldset>
              <label htmlFor="f_name">First Name</label>
              <input
                type="text"
                onChange={props.event}
                value={f_name}
                name="f_name"
                id="f_name"
              ></input>
            </fieldset>
            <fieldset>
              <label htmlFor="l_name">Last Name</label>
              <input
                type="text"
                onChange={props.event}
                value={l_name}
                name="l_name"
                id="l_name"
              ></input>
            </fieldset>
          </div>
          <div className="flex">
            <fieldset>
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                onChange={props.event}
                value={dob}
                name="dob"
                id="dob"
              ></input>
            </fieldset>{" "}
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={props.event}
                value={email}
                name="email"
                id="email"
                className={errors.email && "error"}
              ></input>
              <span>{errors.email || ""}</span>
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              onChange={props.event}
              value={address}
              name="address"
              id="address"
            ></input>
          </fieldset>
          <hr />
          <div className="flex justify-end">
            {props.next(props.nextEvent)}
            {props.prev(props.backEvent)}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
