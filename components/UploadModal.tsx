'use client';

import useUploadModal from '@/hooks/useUploadModal';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Modal from './Modal';
import { useState } from 'react';

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState()
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null,
    },
  });
  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = (values) => async {
    // Upload to supabase
  }
  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input id="title" disabled={isLoading} {...register('title', {required: true})} placeholder="Song title" />
      </form>
    </Modal>
  );
};

export default UploadModal;
