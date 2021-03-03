import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const Title = styled.h2`
  color: #373737;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`

const Input = styled.input`
  padding: 10px 14px;
  border: 2px solid ${props => props.theme.secondaryColor};
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px ${props => darken(0.5, props.theme.secondaryColor)};
  }
`

type Props = {
    handleChange: (searchTerm: string) => void
}

const Header: FC<Props> = ({ handleChange }): ReactElement => {

    return (
        <AppHeader>
            <Title>LIGA-A RAKETA ARTICLE SPA</Title>
            <Input placeholder={'Search article'} onChange={(event) => handleChange(event.currentTarget.value)}/>
        </AppHeader>
    )
}

export default Header