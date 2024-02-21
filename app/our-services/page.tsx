import type { Metadata } from 'next'

import Container from '../components/Commons/Container';
import IntroductionServices from '../components/Sections/IntroductionServices';
import OurServices from '../components/Sections/OurServices';

export const metadata: Metadata = {
    title: 'Our Service - Folinas LLC',
    description: 'Our team takes immense pride in our capacity to transform concepts into distinct and polished designs.',
}

const OurServicesPage = () => {    
    return (
        <Container>
            <IntroductionServices/>
            <OurServices/>
        </Container>
    )
}
 
export default OurServicesPage;