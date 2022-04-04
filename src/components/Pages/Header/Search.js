import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap'

const Search = ({SearchToggle,closeSearch}) => {
console.log(SearchToggle);
console.log(closeSearch)

  const closeBtn = () => {

  }
  return (
    <>
      <Container fluid id='searchBar' className={closeSearch ? "d-flex shadow" : "d-none"}>
        <Container>
          <InputGroup>
            <FormControl className='shadow-none' placeholder='What you want to Search...' />
            <Button className='btn btn-dark shadow-none border-0 rounded'><i className="bi bi-search text-white"></i></Button>
            <Button onClick={()=>SearchToggle()} className='btn btn-dark shadow-none border-0 ms-3 rounded'><i className="bi bi-x-circle text-white"></i></Button>
          </InputGroup>
        </Container>
      </Container>
    </>
  )
}

export default Search