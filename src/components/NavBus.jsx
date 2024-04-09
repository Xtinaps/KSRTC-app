import React from 'react'

const NavBus = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KSRTC APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">ADD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/View">VIEW</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Search">SEARCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Delete">DELETE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBus