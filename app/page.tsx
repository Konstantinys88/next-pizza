import { Container, Title, TopBar } from '@/components/shared';
import { Filters } from '@/components/shared/filters';

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold' />
            </Container>

            <TopBar />

            <Container className='mt-10 pb-14'>
                <div className='flex gap-[60px]'>
                    {/**Филбтрация */}
                    <div className='w-[250px]'>
                        <Filters />
                    </div>

                    {/**Список товаров*/}
                    <div className='flex=1'>
                        <div className='flex flex-col gap-16'>Список товаров</div>
                    </div>
                </div>
            </Container>
        </>
    );
}

//50:30
//1:03:06 - 23.09.2024
//1:37:06 - 25.09.2024
