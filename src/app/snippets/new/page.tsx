import { db } from '@/db';

export default function SnippetCreatePage() {
  const createSnippet = async (formData: FormData) => {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);
  };

  return (
    <form action={createSnippet}>
      <h3 className='font-bold m-3'>Create a Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            name='title'
            id='title'
            className='w-full rounded border p-2'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            id='code'
            className='w-full rounded border p-2'
          />
        </div>

        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  );
}
