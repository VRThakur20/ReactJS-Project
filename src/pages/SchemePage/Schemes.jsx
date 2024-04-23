import Navbar from "../../components/navbar/Navbar";
import SchemePage from "../../components/Tables/schemePage";
import axios from "axios";

const schemes = {
    name: 'Punjab PMS (Post Metric Scheme)',
    description: 'Students anyone with disability are given this oppurtunity to support themselves for their education',
    criteria: 'Applicable to students having annual family income not more than Rs. 2.50 lac and eligible for PMS. The concerned SC students shall submit a self attested-undertaking regarding his/her family annual income at the time of admission.',
    documents: ['Income Certificate', 'Caste Certificate', 'Disability Certificate', 'Bank Account Details', 'Passport Size Photo', 'Previous Year Marksheet', 'Fee Receipt'],
    ministry: 'Ministry of Education',
    status: 'Approved',
    date: 'March 17, 2020',
    end_datetime: '2020-01-07',
    href: '#',
    download: 'https://www.google.com'
}

const scheme = () =>{
    return(
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 m-20 shadow p-5">
                <SchemePage scheme={schemes} />
            </div>
        </>
    )
};

export default scheme;
