import React from 'react';
import Login from 'components/Login';

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react';
import logo from 'image/logo3.png';


const Home = () =>(
    <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='tiny' src={logo} style={{ marginRight: '1.5em' }} />
          GoLink
        </Menu.Item>

        {/* <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        <Dropdown item simple text='사용자관리'>
          <Dropdown.Menu>
            <Dropdown.Item><span className='text'>사용자 조회</span></Dropdown.Item>
            <Dropdown.Item>사용자 등록</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='주문 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>주문 등록</Dropdown.Item>
            <Dropdown.Item>주문 조회</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='배송 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>배송 조회</Dropdown.Item>
            <Dropdown.Item>송장출려대기</Dropdown.Item>
            <Dropdown.Item>반품조회</Dropdown.Item>
            <Dropdown.Item>분리배송조회</Dropdown.Item>
            <Dropdown.Item>미발송조회</Dropdown.Item>
            <Dropdown.Item>합포장 분리</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='출고 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>상품 매핑</Dropdown.Item>
            <Dropdown.Item>출고 의뢰</Dropdown.Item>
            <Dropdown.Item>출고 준비</Dropdown.Item>
            <Dropdown.Item>피킹조회</Dropdown.Item>
            <Dropdown.Item>출고관리</Dropdown.Item>
            <Dropdown.Item>상품명 분할</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='재고 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>재고 조회</Dropdown.Item>
            <Dropdown.Item>재고 등록</Dropdown.Item>
            <Dropdown.Item>입출고조회</Dropdown.Item>
            <Dropdown.Item>입출고등록</Dropdown.Item>
            <Dropdown.Item>입출고수정</Dropdown.Item>
            <Dropdown.Item>예외재고조회</Dropdown.Item>
            <Dropdown.Item>예외재고등록</Dropdown.Item>
            <Dropdown.Item>예외재고상세조회</Dropdown.Item>
            <Dropdown.Item>입출고예정조회</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item simple text='공통코드 관리'>
          <Dropdown.Menu>
            <Dropdown.Item>공통코드 조회</Dropdown.Item>
            <Dropdown.Item>공통코드 그룹 등록</Dropdown.Item>
            <Dropdown.Item>공통코드 등록</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


      </Container>
    </Menu>
​
    <Container text style={{ marginTop: '7em' }}>
      <Login/>
    </Container>
​
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Footer Header' />
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
​
        <Divider inverted section />
        <Image centered size='mini' src={logo} />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
);

export default Home;