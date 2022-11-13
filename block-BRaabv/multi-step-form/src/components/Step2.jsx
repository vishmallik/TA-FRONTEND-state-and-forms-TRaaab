export default function Step2(props) {
  let { step, message } = props.state;

  if (step === 2) {
    return (
      <div className="flex step">
        <div>
          <img src="/images/pic2.jpg" alt="step2" />
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
          <h2>Message</h2>
          <div className="">
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea
                rows="10"
                column="5"
                onChange={props.event}
                value={message}
                name="message"
                id="message"
              ></textarea>
            </fieldset>
            <fieldset className="flex justify-start">
              <div className="flex justify-start">
                <input
                  type="radio"
                  name="choice"
                  id="choice1"
                  value="The number one choice"
                  onChange={props.event}
                />
                <label htmlFor="choice1">The number one choice</label>
              </div>
              <div className="flex justify-start">
                <input
                  type="radio"
                  name="choice"
                  id="choice2"
                  value="The number two choice"
                  onChange={props.event}
                />
                <label htmlFor="choice2">The number two choice</label>
              </div>
            </fieldset>
          </div>

          <hr />
          <div className="flex justify-end">
            {props.prev(props.backEvent)}
            {props.next(props.nextEvent)}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
