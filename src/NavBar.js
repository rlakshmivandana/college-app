import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img width={"250px"} height={"80px"} src={"data:image/png;base64,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"}/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Administration</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Placement</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Departments
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Computer Science
                                </DropdownItem>
                                <DropdownItem>
                                    Mechanical Department
                                </DropdownItem>
                                <DropdownItem>
                                    Civil Department
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Admissions
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    UG
                                </DropdownItem>
                                <DropdownItem>
                                    PG
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Academics
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Syllabus
                                </DropdownItem>
                                <DropdownItem>
                                    Library
                                </DropdownItem>
                                <DropdownItem>
                                    Scholarships
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Facilities
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Library
                                </DropdownItem>
                                <DropdownItem>
                                    Hostel
                                </DropdownItem>
                                <DropdownItem>
                                    Transport
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink href="">Contact Us</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="">Login</NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarText>
                       Welcome!!!
                  </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;