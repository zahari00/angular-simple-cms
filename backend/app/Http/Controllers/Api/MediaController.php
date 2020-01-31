<?php

namespace App\Http\Controllers\Api;

use App\Jobs\SaveMedia;
use App\Media;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MediaController extends ApiController
{
    protected $model = Media::class;

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /**
         * Validate file mime type
         */
        $validator = Validator::make($request->all(), [
            'media' => 'required|mimes:jpeg,png,jpg,gif,webp,svg'
        ]);

        // if validate fails abort with 400
        if ($validator->fails()) {
            return response('No file is provided', 400);
        }

        try {
            // get the file
            $file = $request->media;

            // get the public path
            $path = public_path('uploads') . '/130x130/';

            // get the file extension
            $extension = '.' . $file->getClientOriginalExtension();

            // get the file name
            $file_name = $file->getClientOriginalName();
            // remove the extension from the file name
            $file_name = str_replace($extension, '', $file_name);
            $file_name .= '-1';

            $int = 2;

            // while file exists increase the last digit with 1
            // example file-1.txt, file-2.txt etc
            while (file_exists($path . $file_name . $extension)) {
                $file_name = substr_replace($file_name, '', -1);
                $file_name .= $int;
                $int++;
                if ($int > 100) {
                    return response('Failed to save file', 500);
                }
            };

            // save to DB
            $media = new Media;
            $media->path = $file_name . $extension;
            $media->save();

            /**
             * Dispatch job to save media
             */
            dispatch(new SaveMedia($file, $file_name . $extension, $extension));

            // return the file
            return [
                'success'   => true,
                'data'      => $media
            ];
        } catch (Exception $e) {
            print json_encode([
                'success'   => false,
                'errors'    => ['Server error']
            ]);
            exit();
        }
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $media = Media::where('id', $id)->first();
        
        if(!isset($media) || !$media) {
            return [
                'success'   => false,
                'errors'    => ['Media not found']
            ];
        }
        $media->update($request->all());
        return [
            'success'   => true,
            'data'      => $media  
        ];
    }
}
