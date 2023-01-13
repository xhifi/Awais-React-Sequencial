import Main from '../../components/layouts/Main'
import TestComponent from '../../components/TestComponent';

export default function Landing () {
    
    const city = "Sekhmut";

    return (
        <Main>
            <h1>THis is the ENd</h1>
            <hr />
                <TestComponent initialValue={500} />
            <hr />
        </Main>
    )
}