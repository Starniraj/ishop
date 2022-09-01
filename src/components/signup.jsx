import React from 'react'

const SignUp = () => {
  return (
    <div>
        <button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal" style={{position:"relative",left:"350px",bottom:"10px",width:"120px",backgroundColor:"brown"}}><i class="fa-solid fa-cash-register"></i>Register</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fw-bold" id="exampleModalLabel">sineUp</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <btton className="btn btn-primary w-100 mb-2">
            <span className='fa fa-google me-2'></span>sign up with google
        </btton>
        <btton className="btn btn-primary w-100 mb-2">
            <span className='fa fa-google me-2'></span>sign up with facebook
        </btton>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary w-100">submit</button>
</form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp