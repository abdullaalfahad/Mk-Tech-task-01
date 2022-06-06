import React from 'react';

const Influencers = () => {
    return (
        <div id='advertisers' className='py-16 lg:py-28'>
            <div class="divider text-xl lg:text-4xl text-primary">INFLUENCERS</div>
            <div className='container mx-auto mt-12 lg:mt-20'>
                <div className='grid md:grid-cols-3 gap-8 mx-auto w-11/12'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-full' src="https://bestylish.org/wp-content/uploads/2019/01/gentleman.png" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Loket Ges</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cumque soluta accusamus recusandae consectetur! Tempore ut voluptas, nisi autem harum perferendis saepe incidunt excepturi ea. Beatae, accusamus. Ullam, quia quae?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-p1wA3BtPzD79GUqJkkgX5P9ZFfydYs82oculPQh2ZNK07GDDi9t-ShLOdRfkCN9Hmg&usqp=CAU" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Harray Pom</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cumque soluta accusamus recusandae consectetur! Tempore ut voluptas, nisi autem harum perferendis saepe incidunt excepturi ea. Beatae, accusamus. Ullam, quia quae?</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='w-full' src="https://cdn.images.express.co.uk/img/dynamic/130/590x/modern-gentleman-qualities-traits-manners-respectful-kind-polite-841392.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Rikky Jack</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis cumque soluta accusamus recusandae consectetur! Tempore ut voluptas, nisi autem harum perferendis saepe incidunt excepturi ea. Beatae, accusamus. Ullam, quia quae?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Influencers;