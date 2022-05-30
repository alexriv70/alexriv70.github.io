import Link from 'next/link'
import Image from 'next/image'
import {DarkMode, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 200ms ease;   
    }

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const AbstwactAwtImg = `/images/AbstwactAwt${useColorModeValue('', '-dark')}.png` 

    return (
        <Link href="/">
            <a>
                <LogoBox>
                <Image src={AbstwactAwtImg} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    frontFamily='M Plus Rounded 1c'
                fontWeight="bold"
                ml={3}>
                Alexander J. Riveron
                </Text>
            </LogoBox>
            </a>
        </Link>
    )
}


export default Logo
