import React from 'react'

const JQuery_Icon = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' className={props.highlighted ? 'icons svg icon-highlighted' : 'icons svg'} width={props.width} height={props.height} viewBox='0 0 128 128' aria-labelledby={props.iconTitle}>
    <title id={props.iconTitle}>JQuery Icon</title>
    <path d='M65.283 106.928c-.828-.187-1.633-.446-2.441-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.388-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.238-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.173-.646-1.751-.982l-.591-.33c-.769-.452-1.529-.921-2.28-1.397l-.615-.41c-.546-.351-1.088-.709-1.623-1.079l-.523-.367c-.516-.365-1.026-.734-1.534-1.109l-.679-.514c-.464-.355-.927-.713-1.384-1.082l-.617-.495c-.581-.479-1.156-.959-1.724-1.453l-.188-.159c-.614-.539-1.217-1.092-1.812-1.647l-.51-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.599-1.69l-.078-.084c-.553-.604-1.092-1.221-1.621-1.844l-.424-.504c-.395-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.804-58.204l-8.611 10.921c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.411.801.617 1.198l.395.759.245.437.439.786c.262.461.53.92.805 1.379l.458.756c.304.491.615.976.934 1.46l.398.614c.438.655.888 1.309 1.352 1.951l.039.05.228.308c.4.553.814 1.099 1.232 1.639l.463.59c.373.469.752.935 1.139 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.032.033.062.068c.526.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.526.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.526.456 1.062.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.495.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.749.474 1.51.943 2.278 1.396l.63.355c.565.326 1.134.646 1.711.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.786.275 1.581.53 2.381.779l.575.172c.814.245 1.618.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.014 16.954-36.112 21.426-57.997 16.447zM46.069 63.697c1.195 1.713 2.52 3.751 4.105 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.202 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.484.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.679.448 1.02.672l.482.319c.544.349 1.096.689 1.656 1.015l.234.136c.483.278.973.552 1.463.818l.521.271c.339.177.678.358 1.024.53l.155.07c.702.346 1.411.68 2.136.995l.472.194c.578.246 1.163.486 1.75.71l.75.275c.533.198 1.068.378 1.608.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.69-24.886 50.69-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.7-.227c-.548-.177-1.092-.365-1.632-.562l-.736-.274c-.591-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.364-.177-.721-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.106-.661-1.65-1.008l-.498-.332c-.358-.232-.717-.469-1.069-.707-.759-.524-1.497-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.897-14.486-16.819-23.971-3.062-9.836-2.401-20.878 2.903-29.84l-6.517 9.2c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.038 2.216 4.013 3.528 5.892zM89.476 49.498c.339.125.678.237 1.022.354l.451.143c.484.152.966.329 1.467.424 22.739 4.394 28.908-11.669 30.549-14.034-5.403 7.779-14.482 9.646-25.623 6.942-.88-.213-1.848-.531-2.696-.832-1.088-.388-2.16-.83-3.201-1.329-1.979-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745l-3.52 4.851c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.112 10.492 14.475 18.721 17.494z'
    />
  </svg>
)

export default JQuery_Icon