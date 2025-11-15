"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
};

export default function ImageModal({
  isOpen,
  onClose,
  image,
  title,
  description,
}: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-hidden">
          {/* Image Section - fixed height */}
          <div className="lg:w-1/2 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              width={400}
              height={600}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content Section - scrollable */}
          <div className="lg:w-1/2 flex flex-col overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {title}
              </DialogTitle>
            </DialogHeader>

            {/* Scrollable description */}
            <div className="flex-1 py-4 overflow-y-auto pr-3">
              <DialogDescription className="text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                {description}
              </DialogDescription>
            </div>

            <DialogFooter>
              <Button onClick={onClose} className="px-6">
                Đóng
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
