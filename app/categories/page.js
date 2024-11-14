import Circles from "../parts/circles";

export default function Home() {
    return (
        <>
            <Circles button skew items={[...Array(10)].map((_,i) => ({'text': `دسته بندی ${i+1}`, 'className': `color${i+1} bg${i+1}`, 'icon': <i className='bx bx-chalkboard bx-sm'></i>}))} />
        </>
    );
}
