from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from generation import run_model_inference
from pydantic import BaseModel
import uvicorn

# Define the input model
class GenerationInput(BaseModel):
    image: str  # Base64 encoded image
    style: str  # Style to apply

# Initialize FastAPI app
app = FastAPI(
    title="MozAIc API",
    description="API for AI image generation and transformation",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.post("/task")
async def process_generation(input_data: GenerationInput):
    try:
        # Convert input to dictionary for the model
        data = {
            "image": input_data.image,
            "style": input_data.style
        }
        
        # Run model inference
        result = run_model_inference(data)
        
        # Return the result
        return {
            "status": "success",
            "result": result
        }
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing generation: {str(e)}"
        )

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000) 