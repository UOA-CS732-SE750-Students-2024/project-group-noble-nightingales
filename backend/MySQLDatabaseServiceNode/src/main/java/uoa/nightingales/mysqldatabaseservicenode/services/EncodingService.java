package uoa.nightingales.mysqldatabaseservicenode.services;

/**
 * One-way encoding
 */
public interface EncodingService {

    /**
     * This method encodes the raw password of user_credential or any other secret information
     * @param rawData password usually
     * @return encoded data
     */
    String encode(String rawData);


    /**
     * This method compares the raw data with an encoded data to check whether the encoded data
     * is encoded based on the raw data
     * @param rawData password
     * @param encodedData password stored in database
     * @return ture/false
     */
    boolean match(String rawData, String encodedData);
}
