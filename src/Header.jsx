
import { Icon } from '@iconify/react/dist/iconify.js'
import { AppBar, Box, Button, IconButton, Link, Toolbar, } from '@mui/material'
import LOGO from "./imges/Logo.png"
import Hero from "./imges/Illustration.png"

import React from 'react'

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static " sx={{ backgroundColor: "#fff", color: "#000", padding: "13px" }} >
                    <Toolbar className='d-flex justify-content-between container text-decoration-none '>
                        <img src={LOGO} alt="" />
                        <Box className='text-decoration-none'>
                            <Link className='text-decoration-none mx-2' href="#" color="inherit">
                                Home
                            </Link>

                            <Link className='text-decoration-none mx-2' href="#" color="inherit">
                                Service
                            </Link>

                            <Link className='text-decoration-none mx-2' href="#" color="inherit">
                                Feature
                            </Link>

                            <Link className='text-decoration-none mx-2' href="#" color="inherit">
                                Product
                            </Link>

                            <Link className='text-decoration-none mx-2' href="#" color="inherit">
                                Testimonial
                            </Link>
                            <Link className='text-decoration-none mx-2' href="#" color="inherit">
                                FAQ
                            </Link>
                        </Box>
                        <Box>
                            <Button className='text-success' color="inherit">Login</Button>
                            <Button className='bg-success text-white text-success mx-4 rounded-2 py-2 px-3' color="inherit">Sign up</Button>
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>



            <Box className="container mt-5 " >
                <Box className="row align-items-center mt-5 ">
                    <Box className="col-lg-7 col-md-6 col-sm-12 mt-5" >
                        <h1 className=' display-3 fw-bold '>Lessons and insights  <span className=' text-success '>from 8 years</span> </h1>
                        <p className=' text-secondary '>Where to grow your business as a photographer: site or social media?</p>

                        <Button className='bg-success text-white text-success rounded-2 py-2 px-3 ' color="inherit">Register</Button>

                    </Box>
                    <Box className="col-lg-5 col-md-6 col-sm-12 mt-5 " >
                        <img className=' img-fluid ' src={Hero} alt="" />
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Header