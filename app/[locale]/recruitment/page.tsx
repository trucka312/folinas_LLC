import type { Metadata } from 'next'

import Container from '../../components/Commons/Container';
import Recruitment from '../../components/Sections/Recruitment';

export const metadata: Metadata = {
    title: 'Recruitment - Folinas LLC',
    description: 'Join the Folinas team to experience a young, dynamic working environment with opportunities to advance in your profession',
}

const RecruitmentPage = () => {    
    return (
        <Container>
            <Recruitment/>
        </Container>
    )
}
 
export default RecruitmentPage;