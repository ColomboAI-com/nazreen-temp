'use client';

import React from 'react';

export interface VideoGenParams {
  prompt: string;
  negative_prompt?: string;
  guidance_scale?: number;
  num_frames?: number;
  duration?: number;
  model?: "ltx-video";
  seed?: number;
  width?: number;
  height?: number;
  num_inference_steps?: number;
  decode_timestep?: number;
  decode_noise_scale?: number;
  upscale_and_refine?: boolean;
}

interface VideoParametersPanelProps {
  negativePrompt: string;
  setNegativePrompt: React.Dispatch<React.SetStateAction<string>>;
  videoGuidanceScale: number;
  setVideoGuidanceScale: React.Dispatch<React.SetStateAction<number>>;
  videoNumFrames: number;
  setVideoNumFrames: React.Dispatch<React.SetStateAction<number>>;
  videoDuration: number;
  setVideoDuration: React.Dispatch<React.SetStateAction<number>>;
  videoSeed: number;
  setVideoSeed: React.Dispatch<React.SetStateAction<number>>;
  videoWidth: number;
  setVideoWidth: React.Dispatch<React.SetStateAction<number>>;
  videoHeight: number;
  setVideoHeight: React.Dispatch<React.SetStateAction<number>>;
  videoNumInferenceSteps: number;
  setVideoNumInferenceSteps: React.Dispatch<React.SetStateAction<number>>;
  videoDecodeTimestep: number;
  setVideoDecodeTimestep: React.Dispatch<React.SetStateAction<number>>;
  videoDecodeNoiseScale: number;
  setVideoDecodeNoiseScale: React.Dispatch<React.SetStateAction<number>>;
  videoUpscaleAndRefine: boolean;
  setVideoUpscaleAndRefine: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoParametersPanel: React.FC<VideoParametersPanelProps> = ({
  negativePrompt,
  setNegativePrompt,
  videoGuidanceScale,
  setVideoGuidanceScale,
  videoNumFrames,
  setVideoNumFrames,
  videoDuration,
  setVideoDuration,
  videoSeed,
  setVideoSeed,
  videoWidth,
  setVideoWidth,
  videoHeight,
  setVideoHeight,
  videoNumInferenceSteps,
  setVideoNumInferenceSteps,
  videoDecodeTimestep,
  setVideoDecodeTimestep,
  videoDecodeNoiseScale,
  setVideoDecodeNoiseScale,
  videoUpscaleAndRefine,
  setVideoUpscaleAndRefine,
}) => {
  const MODEL_NAME = "ltx-video";

  return (
    <div className="p-6 space-y-5">
      <div>
        <label htmlFor="negativePrompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Negative Prompt
        </label>
        <textarea
          id="negativePrompt"
          value={negativePrompt}
          onChange={(e) => setNegativePrompt(e.target.value)}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="e.g., blurry, low quality, cartoonish"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Width: {videoWidth}px
          </label>
          <input
            id="width"
            type="range"
            min="256"
            max="1024"
            step="64"
            value={videoWidth}
            onChange={(e) => setVideoWidth(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Height: {videoHeight}px
          </label>
          <input
            id="height"
            type="range"
            min="256"
            max="1024"
            step="64"
            value={videoHeight}
            onChange={(e) => setVideoHeight(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="num_frames" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Number of Frames: {videoNumFrames}
          </label>
          <input
            id="num_frames"
            type="range"
            min="10"
            max="120"
            step="1"
            value={videoNumFrames}
            onChange={(e) => setVideoNumFrames(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Duration (seconds): {videoDuration}
          </label>
          <input
            id="duration"
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={videoDuration}
            onChange={(e) => setVideoDuration(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="guidanceScale" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Guidance Scale: {videoGuidanceScale}
          </label>
          <input
            id="guidanceScale"
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={videoGuidanceScale}
            onChange={(e) => setVideoGuidanceScale(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="numInferenceSteps" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Inference Steps: {videoNumInferenceSteps}
          </label>
          <input
            id="numInferenceSteps"
            type="range"
            min="10"
            max="100"
            step="1"
            value={videoNumInferenceSteps}
            onChange={(e) => setVideoNumInferenceSteps(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div>
          <label htmlFor="seed" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Seed
          </label>
          <input
            type="number"
            id="seed"
            value={videoSeed}
            onChange={(e) => setVideoSeed(parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      <div className="pt-2">
        <label htmlFor="modelName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Model
        </label>
        <input
          type="text"
          id="modelName"
          value={MODEL_NAME}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm sm:text-sm dark:bg-gray-600 dark:text-gray-300 cursor-not-allowed"
        />
      </div>

      <details className="mt-4 p-3 border dark:border-gray-600 rounded-md">
        <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
          Advanced Settings
        </summary>
        <div className="mt-3 space-y-4">
          <div>
            <label htmlFor="decodeTimestep" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Decode Timestep: {videoDecodeTimestep}
            </label>
            <input
              id="decodeTimestep"
              type="range"
              min="0.01"
              max="0.1"
              step="0.005"
              value={videoDecodeTimestep}
              onChange={(e) => setVideoDecodeTimestep(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="decodeNoiseScale" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Decode Noise Scale: {videoDecodeNoiseScale}
            </label>
            <input
              id="decodeNoiseScale"
              type="range"
              min="0.01"
              max="0.1"
              step="0.005"
              value={videoDecodeNoiseScale}
              onChange={(e) => setVideoDecodeNoiseScale(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex items-center">
            <input
              id="upscaleAndRefine"
              type="checkbox"
              checked={videoUpscaleAndRefine}
              onChange={(e) => setVideoUpscaleAndRefine(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500"
            />
            <label htmlFor="upscaleAndRefine" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Upscale and Refine
            </label>
          </div>
        </div>
      </details>
    </div>
  );
};

export default VideoParametersPanel;