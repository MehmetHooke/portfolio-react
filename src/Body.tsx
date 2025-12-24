
import './Body.css'
import profile from "./assets/profile.jpeg";
import ProjectCard from './components/ProjectCard';
export default function Body() {
    return (
        <div className='text-white'>

            <div className="page justify-center pl-5  flex items-center gap-6">
                <img
                    src={profile}
                    className="w-15 h-15  md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-full object-cover shrink-0"
                    alt="Mehmet Hoke"
                />
                <div className="flex flex-col">
                    <h1 className="text-xl sm:text-3xl lg:text-6xl font-extrabold">Mehmet Hoke</h1>
                    <div className="text-xs md:text-lg lg:text-2xl">
                    <p>Mobile Developer & Frontend Developer</p>
                    <p>React • React Native • TypeScript • JavaScript • Firebase • HTML & CSS</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <div className="rounded-2xl border border-white/10  bg-white/5 p-5 max-w-3/4">
                    <h1 className='font-bold'>Hakkımda</h1>
                    <p className='mt-2 font-thin'>Mobil uygulama geliştirme ve full-stack ürün geliştirme alanında uzmanlaşan bir yazılım geliştiricisiyim. 
React Native, Kotlin ve Firebase/Google Cloud ekosistemi ile ölçeklenebilir mobil ürünler geliştiriyorum.

PianoSense (gerçek zamanlı piyano nota analizi) ve QuickCV (cloud-based PDF oluşturma pipeline’ı) gibi tamamen bana ait projelerle hem mobil hem backend tarafında uçtan uca ürün geliştirme deneyimi kazandım.

Gerçek zamanlı veri işleme, dinamik HTML → PDF render süreçleri, Firebase mimarileri ve kullanıcı odaklı mobil arayüz geliştirme konularında çalışıyorum. Amacım, modern teknolojilerle kaliteli ürünler geliştirmek ve bu alanda profesyonel kariyerimi ilerletmek.</p>
                </div>
            </div>


            <main className="mt-12 p-8 m-8 ">
                <h2 className="text-xl font-bold text-center">Projects</h2>

                <div className=" grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-2">
                    <ProjectCard id={"1"} name={"QuickCV – Akıllı CV Hazırlama"} description='QuickCV, kullanıcıların telefon üzerinden modern CV şablonları seçip doldurduğu, verilerin Firebase’de saklandığı ve arka plandaki bir HTML → PDF servisi ile profesyonel PDF çıktıları üreten bir CV oluşturma uygulamasıdır.' tech={["React Native · TypeScript · Firebase"]} repoUrl='https://github.com/MehmetHooke/quick-cv' />
                    <ProjectCard id={"2"} name={"PianoSense – Nota Analiz Uygulaması"} description='PianoSense, kaydedilen piyano sesini analiz ederek TarsosDSP ve frekans → nota eşleştirmeleri ile çalınan notaları tespit eden bir mobil uygulama fikridir. Yeni sürümünde analiz işlemini sunucu tarafına taşıyarak çapraz platform desteği hedefliyorum.' tech={["Kotlin · TarsosDSP · Firebase"]} repoUrl='https://github.com/MehmetHooke/pianoSensev3' />
                    <ProjectCard id={"3"} name={"Movie Search App React Native"} description='MovieFlix, React Native + Expo ile geliştirilmiş, TMDB API ve Appwrite entegrasyonu sayesinde film arama, detay görüntüleme ve favorilere kaydetme özellikleri sunan bir mobil uygulamadır.' tech={["React Native Expo · TypeScript · Appwrite"]} repoUrl='https://github.com/MehmetHooke/Movie-App-ReactNative' />
                </div>
            </main>
        </div>
    )
}
