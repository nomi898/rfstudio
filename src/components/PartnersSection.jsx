import partnershipsImage from '../assets/partnerships-rfs.png'

const PartnersSection = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-slate-200 bg-[#f4f4f5] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div className="min-w-0">
            <p className="text-sm font-black tracking-[-0.02em] text-slate-950">Our Partnerships Across Globe</p>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              The <span className="text-blue-700">Catalysts</span>
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-9 text-slate-600">
              <p>
                Our partners are catalysts of our marketing equation. They are a big part of the growth hacks that we
                craft for you. Our collaborations are to accelerate your growth and help you tap into various markets.
              </p>
              <p>
                Working deeply with channels and the way their algorithms work, we figure out how to acquire cheaper,
                retain better, and keep expanding through the right partnerships and collaborations.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={partnershipsImage}
              alt="Handshake illustration representing partnerships"
              className="h-auto w-full max-w-[22rem] object-contain sm:max-w-[24rem] lg:max-w-[28rem]"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center">
          <p className="text-lg font-bold text-slate-900">Our Partners</p>
          <h3 className="mt-2 text-4xl font-black leading-none tracking-[-0.04em] text-blue-700 sm:text-5xl">
            We Have Great Connections!
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Our trusted partner network of top technology brands and leading agencies helps us deliver the best,
            seamless experience time and again without the mobile overlap seen in the live layout.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
