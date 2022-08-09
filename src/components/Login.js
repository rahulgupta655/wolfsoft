import React from 'react';
import "../assets/css/style.css"
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Icon } from "../utilities/Icon"

function Login() {

  return (
    <MDBContainer fluid >

      <MDBRow>

        <MDBCol col='4' md='6'>

          <div className='login_account_div mt_20'>
            <p className="fw-bold mt-2 mb-2">Don't have an account?</p>
            <a href="#!" className="craete-link">Create Account</a>
          </div>

          <div className="loginpage_field">
            <div className="divider">
              <h2 className="">Login with <span className='fw-bold'>SQUIRRELL</span></h2>
              <p className="">Enter your Details below</p>
            </div>

            <MDBInput className='logininput_field' wrapperClass='mb-4' placeholder='Enter your email' id='formControlLg' type='email' size="lg" />
            <MDBInput wrapperClass='mb-4' className='logininput_field' placeholder='Passowrd' id='formControlLg' type='password' size="lg" />

            <div className="d-flex justify-content-between mb-4">
              <a href="!#">Forgot password?</a>
              <button className="btn-primary pt_10 pl_30 pb_10 pr_30 ">Login</button>
            </div>

            <hr/>

            <div className="socialmedia_div">

              <p className="lead fw-normal mb-0 me-3">Or Login with</p>

              <div className='socialmedia_button d-flex flex-row align-items-center mt_10'>
                <button className='pt_10 pb_10 pr_10 pl_10'>
                  <img className='mr_5' src={Icon.Google}></img>Google
                </button>

                <button className='pt_10 pb_10 pr_10 pl_10'>
                  <img className='mr_5' src={Icon.Linkedin}></img>Linked In
                </button>

                <button className='pt_10 pb_10 pr_10 pl_10'>
                  <img className='mr_5' src={Icon.Twitter}></img>Twitter
                </button>
              </div>
            </div>

          </div>



        </MDBCol>

        <MDBCol col='10' md='6' style={{ background: "#3653F6" }}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;