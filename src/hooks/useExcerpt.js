import React, { useState } from 'react'

const useExcerpt = (content) => {
    const excerptText = content;
    const trimmedText =  excerptText.slice(0,10);
    return trimmedText
}

export default useExcerpt