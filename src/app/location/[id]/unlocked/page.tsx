"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { VIETNAM_LOCATIONS, MapLocation } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";

export default function LocationUnlockedPage() {
  const params = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const location = useMemo<MapLocation | null>(() => {
    const id = (params?.id as string) || "";
    return VIETNAM_LOCATIONS.find((l) => l.id === id) ?? null;
  }, [params?.id]);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Không tìm thấy địa điểm.</p>
      </div>
    );
  }

  const r = location.riddle;

  const pairs = [
    { img: r.image1, desc: r.description1, heading: r.heading1 },
    { img: r.image2, desc: r.description2, heading: r.heading2 },
    { img: r.image3, desc: r.description3, heading: r.heading3 },
    { img: r.image4, desc: r.description4, heading: r.heading4 },
    { img: r.image5, desc: r.description5, heading: r.heading5 },
    { img: r.image6, desc: r.description6, heading: r.heading6 },
    { img: r.image7, desc: r.description7, heading: r.heading7 },
    { img: r.image8, desc: r.description8, heading: r.heading8 },
  ];

  const videoSrc = r.video;

  const openModal = (img: string, desc: string, heading: string) => {
    setIsModalOpen(true);
    setTitle(heading || r.label);
    setDescription(desc);
    setImage(img);
  };

  return (
    <div className="min-h-screen bg-[url('/images/resolve.png')] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              <span className="text-red-800">{r.label}</span>
            </h1>
          </div>

          {/* Grid: 3 rows x 4 cols */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {/* Row 1 */}
            {pairs[0]?.img && (
              <div>
                <Image
                  src={pairs[0].img}
                  alt="image1"
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                  onClick={() => openModal(pairs[0].img, pairs[0].desc ?? "", pairs[0].heading ?? "")}
                />
              </div>
            )}

            {/* Video spans col 2-3, row 1-2 */}
            <div className="col-span-2 row-span-2">
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
                {videoSrc.includes("youtube.com/embed") || videoSrc.includes("youtube") ? (
                  <iframe
                    className="w-full h-full"
                    src={
                      videoSrc.includes("youtube.com/embed")
                        ? videoSrc
                        : videoSrc.replace("watch?v=", "embed/")
                    }
                    title={`${location.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video controls className="w-full h-full" src={videoSrc} />
                )}
              </div>
            </div>

            {pairs[1]?.img && (
              <div>
                <Image
                  src={pairs[1].img}
                  alt="image2"
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                  onClick={() => openModal(pairs[1].img, pairs[1].desc ?? "", pairs[1].heading ?? "")}
                />
              </div>
            )}

            {/* Row 2 */}
            {pairs[2]?.img && (
              <div>
                <Image
                  src={pairs[2].img}
                  alt="image3"
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                  onClick={() => openModal(pairs[2].img, pairs[2].desc ?? "", pairs[2].heading ?? "")}
                />
              </div>
            )}

            {pairs[3]?.img && (
              <div>
                <Image
                  src={pairs[3].img}
                  alt="image4"
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                  onClick={() => openModal(pairs[3].img, pairs[3].desc ?? "", pairs[3].heading ?? "")}
                />
              </div>
            )}

            {/* Row 3 */}
            {pairs[4]?.img && (
              <Image
                src={pairs[4].img}
                alt="image5"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                onClick={() => openModal(pairs[4].img, pairs[4].desc ?? "", pairs[4].heading ?? "")}
              />
            )}

            {pairs[5]?.img && (
              <Image
                src={pairs[5].img}
                alt="image6"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                onClick={() => openModal(pairs[5].img, pairs[5].desc ?? "", pairs[5].heading ?? "")}
              />
            )}

            {pairs[6]?.img && (
              <Image
                src={pairs[6].img}
                alt="image7"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                onClick={() => openModal(pairs[6].img, pairs[6].desc ?? "", pairs[6].heading ?? "")}
              />
            )}

            {pairs[7]?.img && (
              <Image
                src={pairs[7].img}
                alt="image8"
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded cursor-pointer shadow hover:shadow-lg transition-shadow"
                onClick={() => openModal(pairs[7].img, pairs[7].desc ?? "", pairs[7].heading ?? "")}
              />
            )}
          </div>

          {/* Back button */}
          <div className="mt-8 flex justify-center">
            <Button
              className="bg-[#C3771D] hover:bg-[#C3771D]/90 text-white text-base px-8 py-3"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="mr-2" /> Quay về bản đồ
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={image}
        title={title}
        description={description}
      />
    </div>
  );
}