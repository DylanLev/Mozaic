const { generateImage } = require('./utils/imageGeneration');

router.post('/generate', async (req, res) => {
  const { userId, stylePreset } = req.body;
  try {
    const imageUrl = await generateImage(userId, stylePreset);
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Image generation failed' });
  }
});
