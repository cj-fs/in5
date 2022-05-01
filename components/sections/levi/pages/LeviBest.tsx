import Link from 'next/link'
const LeviBest = () => {
  return (
    <div className="flex flex-col items-center">
      <nav>
        <ul>
          <li>
            <Link href="/leviBest" passHref>
              <a>Best Songs</a>
            </Link>
          </li>
          <li>
            <Link href="/leviFunny" passHref>
              <a>Funniest Songs</a>
            </Link>
          </li>
        </ul>
      </nav>
      <br></br>
      Top 10 Best Songs
      <br></br>
      <br></br>
      <p>#10</p>
      <p>Lithium - Nirvana</p>
      <img
        src="./nirvana.jfif"
        alt="I'm not gonna crack"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#9</p>
      <p>Demons - Imagine Dragons</p>
      <img
        src="./demon.jfif"
        alt="Night Visions"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#8</p>
      <p>Kryptonite - 3 Doors Down</p>
      <img
        src="./door.jfif"
        alt="Superman"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#7</p>
      <p>Stolen Dance - Milky Chance</p>
      <img
        src="./milky.jfif"
        alt="I want you we could bring it on the floor"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#6</p>
      <p>My Way - Paul Anka, Michael Buble, Andrea Bocelli</p>
      <img
        src="./anka.jfif"
        alt="Hits different at 3 am"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#5</p>
      <p>Little Talks - Of Monsters and Men</p>
      <img
        src="./monster.jfif"
        alt="Good Song"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#4</p>
      <p>Ride - twenty øne piløts</p>
      <img
        src="./blurryface.jpg"
        alt="Super Nostalgic"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#3</p>
      <p>Riptide - Vance Joy</p>
      <img src="./vance.jfif" alt="Man" className="w-[400px] h-[300px]"></img>
      <br></br>
      <p>#2</p>
      <p>Burn the House Down - AJR</p>
      <img
        src="./click.jpg"
        alt="The Click"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>#1</p>
      <p>Stereo Hearts - Gym Class Heroes</p>
      <img
        src="./stereo.jfif"
        alt="Epic Song"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>Honorable Mentions</p>
      <br></br>
      <p>Yellow - Coldplay</p>
      <img
        src="./yellow.jfif"
        alt="It was all yellow"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>Death Bed - Powfu</p>
      <img
        src="./death.jfif"
        alt="Make a cup of coffee"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>I Love You So - The Walters</p>
      <img
        src="./love.jfif"
        alt="I'm gonna pack my things and leave you behind"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>Runaway - Aurora</p>
      <img
        src="./runaway.jpg"
        alt="I had a dream i was 7"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
      <p>Come As You Are - Nirvana</p>
      <img
        src="./batman.jpg"
        alt="As I want you to be"
        className="w-[400px] h-[300px]"
      ></img>
      <br></br>
    </div>
  )
}

export default LeviBest
