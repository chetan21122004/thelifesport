"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

const images = [
  {
    src: "/images/badminton_plyr1.jpg",
    alt: "Badminton Player",
    width: 800,
    height: 533,
  },
  {
    src: "/images/badminton_plyr2.jpg",
    width: 800,
    height: 533,
  },
  {
    src: "/images/badminton_plyr3.jpg",
    width: 800,
    height: 533,
  },
  {
    src: "/images/gymnastics2.jpg",
    width: 800,
    height: 533,
  },
  {
    src: "/images/badminton_plyr4.jpg",
    alt: "The Life Sports Administration",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img17-.jpg",
    alt: "The Life Sports Administration",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img24.jpg",
    alt: "Movement of dance training",
    width: 800,
    height: 514,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img22-.jpg",
    alt: "Indoor badminton training",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img21.jpg",
    alt: "Boy playing badminton",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img19-.jpg",
    alt: "Gymnastic Coach giving instruction to beginners",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img18-.jpg",
    alt: "Teaching Gymnastic skills to young beginner",
    width: 800,
    height: 533,
  },
  
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img15-.jpg",
    alt: "Gymnastic boy climbing rope",
    width: 400,
    height: 538,
  }, 
 
  {
    src: "/images/office-1.jpg",
    alt: "The life Sports office",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img13-.jpg",
    alt: "The Life Sports Office Premises",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img3.jpg",
    alt: "Tying shoes for jogging",
    width: 626,
    height: 417,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img2.jpg",
    alt: "Stretching before workout",
    width: 626,
    height: 417,
  },
  
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img1.jpg",
    alt: "Girl doing yoga pose",
    width: 626,
    height: 417,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/IMG_8107.jpg",
    alt: "Dance Classes in Pune",
    width: 1000,
    height: 667,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/DSC_0820-1-1-1.jpg",
    alt: "Stretching after training",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/IMG_8068-1.jpg",
    alt: "Professional dance trainer",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/DSC_0328-1-1-1.jpg",
    alt: "Office enquiry help desk",
    width: 800,
    height: 533,
  },
  {
    src: "https://www.thelifesports.in/wp-content/uploads/2020/06/img23-1.jpg",
    alt: "Group dancing image",
    width: 800,
    height: 533,
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f39318] via-[#FF5500] to-[#f39318] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">The Life Sports Gallery</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow">
            Capturing moments of excellence, training, and passion in sports and fitness
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Error loading image: ${image.src}`);
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm">
                  <p className="text-white font-medium text-sm leading-relaxed drop-shadow">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-[#f39318] transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#f39318] transition-colors z-10"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm">
                {"<"}
              </div>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#f39318] transition-colors z-10"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm">
                {">"}
              </div>
            </button>

            <div className="max-w-4xl max-h-[90vh] relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
                onError={(e) => {
                  console.error(`Error loading image: ${images[selectedImage].src}`);
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.src = "/placeholder.svg";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium">{images[selectedImage].alt}</p>
                <p className="text-white/70 text-sm mt-1">
                  {selectedImage + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
