import Logo from '@/assets/Logo.png';

function Footer() {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-between mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img alt='logo' src={Logo} />
          <p className='my-5'>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get THE body shapes that you dream of... Get your dream
            body now
          </p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Link</h4>
          <p className='mt-5'>Massa Ocari Tial</p>
          <p className='mt-5'>Olipa Aer Retoc</p>
          <p>Avada Kadabra</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='mt-5'>Massa Ocari Tial</p>
          <p>(333) 425-0000</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
