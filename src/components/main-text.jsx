import '../components/main-text.css'


export default function MainText() {
  return (
    <main>
      <div>
        <h3 className='info-title'>About</h3>
        <p className='section-text'>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div>
      <h3 className='info-title'>Interests</h3>
      <p className='section-text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </main>
  );
}
