export default function Step3(props) {
  let { step } = props.state;

  if (step === 3) {
    return (
      <div className="flex step">
        <div>
          <img src="/images/pic3.jpg" alt="step3" />
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
          <h2>Checkbox</h2>

          <fieldset className="radio flex">
            <input
              type="radio"
              onChange={props.event}
              value="man"
              name="choice1"
              id="man"
            ></input>
            <label htmlFor="man">
              <img src="/images/worker.png" alt="" />{" "}
            </label>

            <input
              type="radio"
              onChange={props.event}
              value="woman"
              name="choice1"
              id="woman"
            ></input>
            <label htmlFor="woman">
              <img src="/images/working-woman.png" alt="" />{" "}
            </label>
          </fieldset>
          <fieldset className="checkbox">
            <div>
              <input
                type="checkbox"
                className="rounded-checkbox"
                id="choice2"
                name="choice2"
                value="I want to add this option."
                onChange={props.event}
              />{" "}
              <label htmlFor="choice2">I want to add this option.</label>
            </div>
            <div>
              {" "}
              <input
                type="checkbox"
                className="rounded-checkbox"
                id="choice3"
                name="choice3"
                onChange={props.event}
                value="Let me click on this checkbox and choose some cool stuff"
              />{" "}
              <label htmlFor="choice3">
                Let me click on this checkbox and choose some cool stuff
              </label>
            </div>
          </fieldset>
          <hr />
          <div className="flex justify-end">
            {props.prev(props.backEvent)}
            {props.next(props.nextEvent)}
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
